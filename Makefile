.PHONY: build-image
build-image:
	docker compose build

.PHONY: shell
shell: build-image
	docker compose run --service-ports --rm client

install:
	npm run install

check-linting:
	ls -lha /root
	npm run lint

fix-linting:
	npm run fix

build:
	npm run build

api-schema:
	npx openapi-typescript-codegen -i https://docs.lune.co/openapi.yml --output src --useUnionTypes --exportCore false --exportServices true --exportSchemas true

# This fixes the generated service files. See README.md for more info
SERVICES_DIR = ./src/services
fix-services: $(SERVICES_DIR)/*
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

# Order is important here to be defined, using ls to sort alphabetically
SERVICES_FILENAMES := $(shell cd $(SERVICES_DIR) && ls ./* | sed 's,./,,')
add-services-client:
	sed -i '/export class LuneClient/i $(MIXINS_METHOD)' src/client.ts
	echo 'applyMixins(LuneClient, [{SERVICES_TEMPLATE}]);' >> src/client.ts
	echo '// eslint-disable-next-line no-redeclare -- mixins require same name' >> src/client.ts
	echo 'export interface LuneClient extends {SERVICES_TEMPLATE}{}' >> src/client.ts
	sed -i 's/{SERVICES_TEMPLATE}/$(SERVICES_FILENAMES)/' src/client.ts
	sed -i 's/\.ts/,/g' src/client.ts
	sed -i 's/Service,]/Service]/' src/client.ts
	sed -i 's/Service,{/Service {/' src/client.ts
	for file in $(SERVICES_FILENAMES) ; do \
		sed -i "/^import { ClientConfig }.*/a import { $${file} } from \"\.\/services\/$${file}\";" src/client.ts; \
		sed -i "s/Service\.ts/Service/g" src/client.ts; \
  done

append-models-client:
	cat src/index.ts | grep export >> src/client.ts

build-final-client: reset-client add-services-client append-models-client

# Full build of the client from the openapi schema. Use this whenever the openapi schema is updated
build-from-schema: install api-schema fix-services build-final-client fix-linting build

# Build from source. This makes sure code is acceptable and working
build-from-source: install check-linting build

publish:
	npm publish --access public

update-version-patch:
	npm version patch

update-version-minor:
	npm version minor

update-version-major:
	npm version major

publish-patch-version: update-version-patch publish

publish-minor-version: update-version-minor publish

publish-major-version: update-version-major publish
