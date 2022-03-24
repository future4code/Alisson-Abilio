import { Button } from "@material-ui/core";
import React from "react";
import { goToHome, goToSelection } from "../../routes/coordinator"
import { Body, BoxButton, Cards, HeaderHome } from "./styled";
import { useHistory } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData";
import { BASE_IMG, BASE_URL, LISTA_FILMES } from "../../constants/urls";


const Home = () => {
    const list = useRequestData([], `${LISTA_FILMES}`)
    const history = useHistory()
    
    const poster = list.map((item) => {
        return <img src={`${BASE_IMG + item.poster_path}`} />
    })

    const title = list.map((item) => {
        return <p>{item.title}</p>
    })

    const sinopse = list.map((item) => {
        return <p>{item.overview}</p>
    })

    function showMessage(){   
        return sinopse  
      }

      function hideMessage(){
        return "fim"
      }


    return (

        <div>
            <HeaderHome>
                <Body>
                    <BoxButton>
                        {title}
                    </BoxButton>
                        <Cards>
                            {poster}
                        </Cards>
                </Body>
            </HeaderHome>
        </div>
    )
}
export default Home