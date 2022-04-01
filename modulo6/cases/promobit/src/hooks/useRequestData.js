import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData = (inicial, url) => {
    const [data, setData] = useState(inicial)

    useEffect(()=> { 

        axios.get(url)
        .then((res) => {
            setData(res.data.results)
            
        })
        .catch((err) => {
            console.log("aqui o erro", err)
           
        } )

    },[])
    return (data)
}


export default useRequestData