import pathes from '../../hosts'

async function proveToken(token){
    const isTokenCorrectly = await fetch(url = pathes.backend_token_verify.fullPath, data = {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
        hearers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: 'Hello!'})
    })
}