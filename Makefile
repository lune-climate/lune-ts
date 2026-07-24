.PHONY: build-image
build-image:
	docker compose build

.PHONY: shell
shell: build-image
	docker compose run --service-ports --rm client

install:
	npm ci --legacy-peer-deps

check-linting:
	npm run check-format

fix-linting:
	npm run fix-format

build:
	npm run build

# Extract the latest calendar version also via the changelog in our docs. This is not perfect but should serve quite well for our purposes.
VERSION := $(shell curl -L -f -s https://docs.lune.co/changelog.md | head -n 1 | tail -c 11)

api-schema:
	@test -n "$(VERSION)" || { echo "Failed to fetch API version from the docs."; exit 1; }
	npx @lune-climate/openapi-typescript-codegen -i https://docs.lune.co/openapi.yml --apiVersion '$(VERSION)' --output src --exportCore false --exportServices true --exportSchemas false

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
	npm ci --legacy-peer-deps

minor-version:
	npm --no-git-tag-version version minor
	npm ci --legacy-peer-deps

major-version:
	npm --no-git-tag-version version major
	npm ci --legacy-peer-deps
