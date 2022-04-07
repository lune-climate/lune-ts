.PHONY: build-image
build-image:
	docker compose build

.PHONY: shell
shell: build-image
	docker compose run --service-ports --rm client

install:
	npm ci

check-linting:
	npm run check-format

fix-linting:
	npm run fix-format

build:
	npm run build

api-schema:
	npx @lune-climate/openapi-typescript-codegen -i https://docs.lune.co/openapi.yml --output src --useUnionTypes --exportCore false --exportServices true --exportSchemas false

# This fixes the generated service files. See README.md for more info
SERVICES_DIR = ./src/services
fix-services: $(SERVICES_DIR)/*
	# Update services to reflect new src/core structure and updated class format
	sed -i '/^import type { CancelablePromise }/d' $^
	sed -i 's/OpenAPI/ClientConfig/g' $^
	sed -i '/^import { request as __request }.*/a import { ApiError } from "../core/ApiError";' $^
	sed -i '/^import { ApiError }.*/a import { AxiosInstance } from "axios";' $^
	sed -i '/^import { AxiosInstance }/a import { Result } from "ts-results-es";' $^
	sed -i 's/export class/export abstract class/' $^
	sed -i '/^export abstract class.*/a protected abstract config: ClientConfig;' $^
	sed -i '/^export abstract class.*/a protected abstract client: AxiosInstance;' $^
	sed -i 's/public static/public/' $^
	sed -i -r 's/CancelablePromise<(.*)>/Promise<Result<\1, ApiError>>/' $^
	sed -i 's/return __request(ClientConfig,/return __request(this.client, this.config,/' $^
	# [ESM support] Update imports to point to .js file
	sed -i -r "s/import type \{(.*)\} from '..\/(.*)'/import type \{\1\} from '..\/\2.js'/" $^
	sed -i -r "s/import \{(.*)\} from '..\/(.*)'/import \{\1\} from '..\/\2.js'/" $^
	sed -i -r 's/import type \{(.*)\} from "..\/(.*)"/import type \{\1\} from "..\/\2.js"/' $^
	sed -i -r 's/import \{(.*)\} from "..\/(.*)"/import \{\1\} from "..\/\2.js"/' $^

reset-client:
	cp -p src/base_client.ts src/client.ts

# Helper function to create mixins.
# Source: https://www.typescriptlang.org/docs/handbook/mixins.html#alternative-pattern
MIXINS_METHOD = \
	function applyMixins(derivedCtor: any, constructors: any[]) {\
	  constructors.forEach((baseCtor) => {\
	    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {\
	      Object.defineProperty(\
	        derivedCtor.prototype,\
	        name,\
	        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||\
	          Object.create(null)\
	      );\
	    });\
	  });\
	};\

# Order is important here to be defined or rebuilds can produce different results, using ls to sort alphabetically
SERVICES_FILENAMES := $(shell cd $(SERVICES_DIR) && ls ./* | sed 's,./,,')
add-services-client:
	# Add services as Mixin. Add them on `applyMixins` and to the exported interface
	sed -i '/export class LuneClient/i $(MIXINS_METHOD)' src/client.ts
	echo 'applyMixins(LuneClient, [{SERVICES_TEMPLATE}]);' >> src/client.ts
	echo '// eslint-disable-next-line no-redeclare -- mixins require same name' >> src/client.ts
	echo 'export interface LuneClient extends {SERVICES_TEMPLATE}{}' >> src/client.ts
	sed -i 's/{SERVICES_TEMPLATE}/$(SERVICES_FILENAMES)/' src/client.ts
	sed -i 's/\.ts/,/g' src/client.ts
	sed -i 's/Service,]/Service]/' src/client.ts
	sed -i 's/Service,{/Service {/' src/client.ts
	# Add imports of all the services added.
	for file in $(SERVICES_FILENAMES) ; do \
		sed -i "/^import { ClientConfig }.*/a import { $${file} } from \"\.\/services\/$${file}\";" src/client.ts; \
		sed -i "s/Service\.ts }/Service }/g" src/client.ts; \
		sed -i "s/Service\.ts\"/Service.js\"/g" src/client.ts; \
  done

append-models-client:
	# Add all the exports on the index.ts to the client
	cat src/index.ts | grep export >> src/client.ts
	# [ESM support] exports must point to .js file
	sed -i -r "s/export type \{(.*)\} from '(.*)'/export type \{\1\} from '\2.js'/" src/client.ts
	sed -i -r "s/export \{(.*)\} from '(.*)'/export \{\1\} from '\2.js'/" src/client.ts

# Recreate the final client file
build-final-client: reset-client add-services-client append-models-client

# Full build of the client from the openapi schema. Use this whenever the openapi schema is updated
build-from-schema: install api-schema fix-services build-final-client fix-linting build

# Build from source. This makes sure code is acceptable and working
build-from-source: install check-linting build

# Rebuild final client and build from source. This rebuilds based on base_client
rebuild-from-source: install build-final-client fix-linting build

patch-version:
	npm --no-git-tag-version version patch
	cd src && npm --no-git-tag-version version patch
	npm ci

minor-version:
	npm --no-git-tag-version version minor
	cd src && npm --no-git-tag-version version minor
	npm ci

major-version:
	npm --no-git-tag-version version major
	cd src && npm --no-git-tag-version version major
	npm ci

publish:
	cd dist && npm publish --access public
