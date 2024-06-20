import * as lune from '@lune-climate/lune'

const luneClient = new lune.LuneClient('your_api_key_would_go_here')
;(async () => {
    const resp = await luneClient.createOrderByMass({
        createOrderByQuantityRequest: {
            mass: { amount: '123.21', unit: lune.MassUnit.T },
        }
    })
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
})()
