.PHONY: build-image
build-image:
	docker compose build

.PHONY: shell
shell: build-image
	docker compose run --service-ports --rm client

install:
	npm ci

check-linting:
	ls -lah /root
	strace -f -s 256 -y -yy -tt npm run check-format || ( ls -lah /root/.npm/_logs/ && cat /root/.npm/_logs/* && exit 1)

fix-linting:
	npm run fix-format

build:
	npm run build

api-schema:
	npx @lune-climate/openapi-typescript-codegen -i https://docs.lune.co/openapi.yml --output src --exportCore false --exportServices true --exportSchemas false

move-client:
	mv src/luneClient.ts src/client.ts

# Recreate the final client file. At this point, move the generated luneClient
build-final-client: move-client

# Full build of the client from the openapi schema. Use this whenever the openapi schema is updated
build-from-schema: install api-schema build-final-client fix-linting build

# Fast build of the client from the openapi schema. Used for development purposes when installing
# dependencies and linting isn't necessary. Currently used on dashboard to speed regeneration of models.
development-build-from-schema: api-schema build-final-client build

# Build from source. This makes sure code is acceptable and working
build-from-source: install check-linting build

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
