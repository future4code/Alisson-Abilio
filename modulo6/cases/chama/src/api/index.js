import React from "react"
import  Api  from "../data/dataBaseUrl"


  export const  getData = async (setData, userNick) => {
    try {
        const response = await Api.get(`/${userNick}`)
        console.log(response.data)
        setData(response.data);
    
    }
    catch (err) {
        alert(err)
    }
}