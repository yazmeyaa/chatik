import {useState} from 'react'

const useFetch =  () => {
    const [loading, setLoading] = useState(false)

    const request = async function(path, method, data){
        setLoading(true)
        const response = await fetch(`http://localhost:13943/${path}`, {
            method: method,
            headers:{
                'Content-Type': 'application/json'
            },
            body: data
        })

        setLoading(false)
        return response
    }

    return { loading, request }
}


export { useFetch }