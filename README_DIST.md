# Lune

Lune is Javascript/Typescript library that allows easy communication with Lune's API.
All endpoints are supported allowing for easier integration into any codebase. For a full
list of possible operations, you can rely on your IDE auto-completion, check the source
classes directly or go through our full OpenAPI schema present here:
https://docs.lune.co/openapi.yml

The library is ECMA and CommonJS compatible.

## How to use

You can check some basic example usage from our github repo here:
https://github.com/lune-climate/lune-ts/tree/master/example-usage

Overview:

```javascript
// Setup your client once in your application
import * as lune from '@lune-climate/lune';
var luneClient = new lune.LuneClient('your_api_key_would_go_here');

// Whenever you want to use it (remember this is a Promise so it's an async operation)
var resp = await luneClient.createOrderByMass({ mass: { amount: "123.21", unit: "t" } });
// Handle error or success response
if (resp.ok) {
  var orderByQuantity = resp.val;
  console.log(`OrderByQuantity: ${JSON.stringify(orderByQuantity)}`);
else if (resp.err) {
  console.log(`Error occurred: ${resp.val.description}`);
}
```
