const lune = require('lune')

const luneClient = new lune.LuneClient(
    'secret-token:7Y7Hg9rJaw3DIzm5uqYx9HPm880-bEZGRUxbArdzIZpX1YqtQWWoyml3VlRM~Bb7',
)
;(async () => {
    const resp = await luneClient.createOrderByMass({
        mass: { amount: '123.21', unit: 't' },
    })
    console.log(resp)
})()
