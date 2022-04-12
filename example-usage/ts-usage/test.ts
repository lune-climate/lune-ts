import * as lune from '@lune-climate/lune'

const luneClient = new lune.LuneClient('your_api_key_would_go_here')
;(async () => {
    const resp = await luneClient.createOrderByMass({
        mass: { amount: '123.21', unit: lune.Mass.unit.T },
    })
    // Handle error and success response separately
    if (resp.err) {
        console.log(`API status code (if available): ${JSON.stringify(resp.val.errors)}`)
        console.log(`API Errors (if available): ${resp.val.statusCode}`)
        console.log(`Human friendly error description: ${resp.val.description}`)
    } else if (resp.ok) {
        const orderByQuantity = resp.val
        console.log(`OrderByQuantity: ${JSON.stringify(orderByQuantity)}`)
    }
})()
