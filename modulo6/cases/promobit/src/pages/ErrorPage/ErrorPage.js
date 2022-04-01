import React from "react";
import { goToHome, goToSelection } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const ErrorPage = () => {

    const history = useHistory()
    return (
        <div>

            <h1>
                <Button onClick={() => goToHome(history)} variant="outlined">HOME</Button>
                <Button onClick={() => goToSelection(history)} variant="outlined">SELEÇAO</Button>

            </h1>
        </div>
    )
}
export default ErrorPage