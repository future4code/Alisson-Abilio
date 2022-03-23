import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData = (inicial, url) => {
    const [data, setData] = useState(inicial)

    useEffect(()=> { 

        axios.get(url)
        .then((res) => {
            setData(res.data.results)
            console.log("aqui o res", res.data.results)
        })
        .catch((err) => {
            console.log("aqui o erro", err)
            alert("ocorreu um erro")
        } )

    },[])
    return (data)
}


export default useRequestData