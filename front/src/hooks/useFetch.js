import {useState} from 'react'

const [isLoading, setLoading] = useState(false)

const useFetch = async (url, method, data) => {
    setLoading(true)

    try{
        const fetchedData = await fetch(url, {
            method: method,
            headers:{
                'Content-Type': 'application/json'
            },
            body: typeof data === string ? body : JSON.stringify(data)
        })
    }
    catch(e=>{
        console.log(e.message)
    })
    setLoading(false)
    return fetchedData.json()

    
}

export { useFetch, isLoading }