import React from "react";
import { goToHome, goToSelection } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";



const Selection = () => {
    const history = useHistory()
    return (
        <div>
              <Button onClick={() => goToHome(history)} variant="outlined">HOME</Button>
                <Button onClick={() => goToSelection(history)} variant="outlined">SELEÇAO</Button>
              
            <h1>
                Selection
            </h1>
        </div>
    )
}
export default Selection

