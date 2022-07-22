import { useState } from "react"

import GlobalStateContext from "./globalStateContext"

export const GlobalState = (props) => {

    const [userData, setUserData] = useState("")
    const [inputValue, setInputValue] = useState('')
   

    return (
        <GlobalStateContext.Provider
        
        value={{
            userData, setUserData,
            inputValue, setInputValue
        }}
        
        
        >
            {props.children}
        </GlobalStateContext.Provider>
    )
}