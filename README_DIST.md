# Lune

Lune is Javascript/Typescript library that allows easy communication with Lune's API.
All endpoints are supported allowing for easier integration into any codebase. For a full
list of possible operations, you can rely on your IDE auto-completion, check the source
classes directly or go through our full OpenAPI schema present here:
https://docs.lune.co/openapi.yml

The library is ESM and CommonJS compatible.

## How to use

You can check some basic example usage from our github repo here:
https://github.com/lune-climate/lune-ts/tree/master/example-usage

Overview:

```javascript
import * as lune from '@lune-climate/lune';

const luneClient = new lune.LuneClient('your_api_key_would_go_here');
(async () => {
  const resp = await luneClient.createOrderByMass({
    createOrderByQuantityRequest: {
      mass: { amount: '123.21', unit: lune.MassUnit.T },
    }
  });
  // Handle error and success response separately
  if (resp.isErr()) {
      const error = resp.error
      if ('statusCode' in error) {
          console.log(`API status code (if available): ${JSON.stringify(error.errors)}`)
          console.log(`API Errors (if available): ${error.statusCode}`)
      }
      console.log(`Human friendly error description: ${error.description}`)

      return
  }
  const orderByQuantity = resp.value
  console.log(`OrderByQuantity: ${JSON.stringify(orderByQuantity)}`)
})();
```
