import React from "react";
import { goToHome } from "../../routes/coordinator";

const Details = () => {
    return (
        <div>
            <button onClick={goToHome} >Home</button>
            <h1>
                Details
            </h1>
        </div>
    )
}
export default Details

