# Lune TS client

## Base client

For the production of models, schemas and services we are using
https://github.com/ferdikoomen/openapi-typescript-codegen. It is a tool we were already using
on the dashboard and it overall produces the best results for our use case. There are some
adaptations we do the generated services, but they are minimal.
We do not export the core client and instead have our own implementations. Models and schemas
are currently untouched, but as stated before, the services are touched and updated.
The main advantage of this approach is not requiring manual intervention whenever a change in
the schema is made.

## Base client changes

The original services are generated as classes, where each method is a static method.
As an example, to place an order, one would call it as: `OrdersService.createOrderByQuantity`
A service in the case of openapi schema is a `tagGroup`, while the method is the `operationId`.

Both the client configuration (url, headers) and the request operation (how to perform the
API call) are hardcoded/static as well, meaning we perform a `createOrderByQuantity` always
with the same client configuration and logic to perform the request. This is not ideal since
we might want to provide different implementations or even maybe have multiple clients with
different configurations (using multiple clients for multiple accounts/users for example).

Since we don't have duplicated `operationIds`, we have agreed to provide all these methods at
the base level of the client, so we do not want to address them via tagGroups.

To accomodate for points above, these changes are made in all generated service files:

- Make service class abstract and add `config` and `client` as abstract protected consts.
- Added an `options` object parameter to every method. This object contains `accountId` which
is used to override the `Lune-Account` header and `apiVersion` which is used to override the
`Lune-Version` header.
- Remove all `static` modifiers from methods
- Update method to perform the request by providing the above defined `config`, `client` and `options`.
- Sporadic changes to accomodate to our custom core implementation, removing unnecessary
  dependencies and renaming others (remove `CancelablePromise`, change `OpenAPI` to `ClientConfig`)
- The way parameters are handled has been reworked. `requestBody` and `queryParams` fields are
united under `data` object. This allows for named parameters and overall better usage for our
users. This means our OpenAPI schema needs to make sure there are no duplicate names between
these two fields on an endpoint but it's a compromise we've agreed to do.

This allows us to do a bit of a hackish behaviour, and have our client provide the `config` and
`client` implementations, and then add all methods of the services to it. It makes all
`operationIds` present at the base level. We then create an interface on the client that inherits
from all the services, putting the `operationIds` types in the client class. This is known as
mixin in Typescript.
See for more info: https://www.typescriptlang.org/docs/handbook/mixins.html#alternative-pattern

## Main client

To make this automatic creation of the client a reality, we emply a strategy where a `base_client.ts`
is used to generate the final `client.ts`. The main stages are:

- `base_client.ts` is copied as a base to `client.ts`
- all services are imported and all their methods are added to the LuneClient class.
- LuneClient interface is created that extends all services so we have type information in our client.
- `index.ts` is appended to `client.ts` so as to have the models and schemas also at the base level.
  This makes it possible to use `lune.Mass` vs `lune.models.Mass`. This can only be achieved since
  we don't mix names between models, schemas and operations.

## Core implementation

We currently use Axios to perform the operations and define our config via an interface dedicated to
hold it. The core implementation might be improved a bit, being still highly based on the original
core library since it was quite good already.

## How to use

Check `example-usage` folder for a basic usage of the library in both TS and JS. But mostly, all you
need is to add it as a dependency, create a new client and use as normally :)
Also, you can check `README_DIST.md` for the README present on the npm package, example usage should be
explicit there so not repeating it here.

## Build

If you want to rebuild everything locally from the remote OpenAPI schema (as performed on CI):
`docker compose -f docker-compose-ci.yml run update_from_remote_schema`

If you want to make sure the build is succeeding but don't want to rebuild the client from the
remote schema nor update with possible changes in the base client generator (as performed on CI):
`docker compose -f docker-compose-ci.yml run build_from_source`

For local builds, you can use a more lightweight version to rebuild the schema from the remote
that doesn't make sure dependencies are installed and skips linting:
`docker compose -f docker-compose.yml run local_model_rebuild`

If you want to get hands on inside the container, you can get in and use the make commands as much
as you want. To get a shell inside it, just do:
`docker compose -f docker-compose.yml run client`

Once inside, you have all Makefile commands at your disposal. Feel free to explore the `Makefile` to
see all available. Here are some examples:
- Fully rebuild from the remote openAPI schema: `make build-from-schema`
- Build with current source code: `make build-from-source`

## I need the new version (Publishing for dummies)
<img width="80" alt="image" src="https://www.shelf-awareness.com/files/1/shelf-awareness/411/pa/SA%20content%202011/dummiesguylogo.jpg">

An API change was released to Production. You want to start using it via the lune-client module. 

1. Backend repo: Make sure the change is actually live in the API 
2. Docs repo: Make sure the change is published in the docs. _theoretically_ this should happen automatically. Due to some vague race condition, the **Update API reference** job might run without picking up the latest API version. Go check https://docs.lune.co/ and make sure you can see your change. If your change is NOT there - re-trigger the process by going to one of the runs of **Update API reference** job (like https://github.com/lune-climate/lune-docs/actions/runs/5963925137) and clicking the "Re-run all jobs" button.
3. ts-lune repo: 2. should trigger **rebuild_schema_change** workflow https://github.com/lune-climate/lune-ts/actions/workflows/rebuild-schema.yml which in turn opens a PR introducing the new API stuff to the ts-client. Go approve and merge that PR.
4. ts-lune repo: Kick off a version bump PR. Pick one:
   * Patch version bump https://github.com/lune-climate/lune-ts/actions/workflows/bump-version-patch.yml
   * Minor version bump https://github.com/lune-climate/lune-ts/actions/workflows/bump-version-minor.yml
   * Major version bump https://github.com/lune-climate/lune-ts/actions/workflows/bump-version-major.yml
   
   and use the "Run workflow" button.
   
   Wait for job to finish.
5. ts-lune repo: 4. should create a PR that bumps the ts-client to a new version. Approve and merge this.
6. npm registry: Go to and wait until you can see that the new version was published https://www.npmjs.com/package/@lune-climate/lune (this should have happened automatically after merging new version number to MASTER as seen in step 5. but seems slow - give it a min)
7. Bump the version of ts-client in your local repo to match the newly published npm version, run yarn/npm to install it and start using it

Diagram you don't actually need to look at:
<img width="1493" alt="image" src="https://user-images.githubusercontent.com/3956723/182634194-0d55a2e0-3832-4e60-8029-38194f4f5ee5.png">

## Future work

- Tests
- Rich types on data (Big on Mass instead of string for example)
- Add advanced functionalities like HMAC verification etc.
- Improve core code. It is still highly similar to original code and I believe a better approach could be made.
- Verify example usage and improve README.
