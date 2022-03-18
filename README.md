# Lune TS client

## Base client

For the production of models, schemas and services we are using
https://github.com/ferdikoomen/openapi-typescript-codegen. It is a tool we were already using
on the dashboard and it overall produces the best results for our use case. There are some
adaptations we do the generated services, but they are minimal.
We do not export the core client and instead have our own implementations. Models and schemas
are currently untouched, but as stated before, the services are touched and updated.

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
- Remove all `static` modifiers from methods
- Update method to perform the request by providing the above defined `config` and `client`
- Sporadic changes to accomodate to our custom core implementation, removing unnecessary
  dependencies and renaming others (remove `CancelablePromise`, change `OpenAPI` to `ClientConfig`)

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
hold it. The core implementation still requires a bit of work, and is still highly based on the
original core library since it was quite good tbh.

## How to use

Check `example-usage` folder for a basic usage of the library in both TS and JS. But mostly, all you
need is to add it as a depency, create a new client and use as normally :)

## Build

We use docker to make sure all builds are the same. To get a shell inside it, just do:
`make shell`

Once inside, to fully rebuild the client library from the openapi schema. Just do:
`make build-from-schema`

If all you want is to check if everything is building, you can use:
`make build`
or
`make build-from-source` (checks linting)

Feel free to explore all other commands in the Makefile.

## Publish

Publishing currently requires manual intervention to up the version. The recommended way is to create a release in github. This will automatically be published to NPM once accepted.

## TODO

- Tests
- Rich types on data (Big on Mass instead of string for example)
- Add advanced functionalities like HMAC verification etc.
- Improve this README and documentation in general
- Think about fully automatic patch deployment when remote schema changes. This might become a bit noisy though.
