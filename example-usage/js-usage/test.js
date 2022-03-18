import * as lune from "lune";
// Alternatively, you can import with
// const lune = require("lune");

const luneClient = new lune.LuneClient('your_api_key_would_go_here');
(async () => {
  const resp = await luneClient.createOrderByMass({
    mass: { amount: "123.21", unit: "t" },
  });
  // Handle error and success response separately
  if (resp.err) {
    console.log(
      `API status code (if available): ${JSON.stringify(resp.val.errors)}`
    );
    console.log(`API Errors (if available): ${resp.val.statusCode}`);
    console.log(`Human friendly error description: ${resp.val.description}`);
  } else if (resp.ok) {
    const orderByQuantity = resp.val;
    console.log(`OrderByQuantity: ${JSON.stringify(orderByQuantity)}`);
  }
})();
