import { useEffect, useState } from "react"
import axios from "axios"

const useRequestDatateste = ( inicial, url) => {
    const [data, setData] = useState(inicial)
    useEffect(() => {

        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log("erro",err.message)
            })
    }
    
    , [url])
    return data
}
export default useRequestDatateste