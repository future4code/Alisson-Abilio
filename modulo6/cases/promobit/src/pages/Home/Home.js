import { Button } from "@material-ui/core";
import React from "react";
import { goToHome, goToSelection } from "../../routes/coordinator"
import { BoxButton, Cards, HeaderHome } from "./styled";
import { useHistory } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData";
import { LISTA_FILMES } from "../../constants/urls";


const Home = () => {
    const list = useRequestData([],`${LISTA_FILMES}`)
    const history = useHistory()
    console.log("aqui a lista",list)

    return (

        <div>
            <HeaderHome>
                Filmes em Alta
                <BoxButton>
                    <Button onClick={() => goToHome(history)} variant="outlined">HOME</Button>
                    <Button onClick={() => goToSelection(history)} variant="outlined">SELEÇAO</Button>
                    <Button variant="outlined">Home1</Button>
                    <Button variant="outlined">Home2</Button>
                    <Button variant="outlined">Home3</Button>
                    <Button variant="outlined">Home4</Button>
                    <Button variant="outlined">Home5</Button>
                    <Button variant="outlined">Home6</Button>
                    <Button variant="outlined">Home7</Button>
                    <Button variant="outlined">Home8</Button>
                    <Button variant="outlined">Home9</Button>
                    <Button variant="outlined">Home10</Button>
                </BoxButton>
            </HeaderHome>
            <div>


                <Cards>
                </Cards>
              
            </div>
        </div>
    )
}
export default Home