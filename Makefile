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
	npx @lune-climate/openapi-typescript-codegen -i https://docs.lune.co/openapi.yml --output src --useUnionTypes --exportCore false --exportServices true --exportSchemas true

copy-client:
	cp src/luneClient.ts client.ts

# Recreate the final client file. At this point, copy the generated luneClient
build-final-client: copy-client

# Full build of the client from the openapi schema. Use this whenever the openapi schema is updated
build-from-schema: install api-schema build-final-client fix-linting build

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
