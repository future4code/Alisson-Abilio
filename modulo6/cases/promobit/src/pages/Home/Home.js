
import React from "react";
import { Body, BoxButton, Cards, HeaderHome } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_IMG, LISTA_FILMES } from "../../constants/urls";
import useRequestDatateste from "../../hooks/teste";
import {LISTA_DETALHES} from "../../constants/urls"

export function getId(item) { return console.log( item.overview ) }


const Home = () => {

    const detalhes = useRequestDatateste([], `${LISTA_DETALHES}`)
    
    
    
    const list = useRequestData([], `${LISTA_FILMES}`)
    
    const poster = list.map((item) => {
        return <button onClick={()=>getId(item)}>
            <img src={`${BASE_IMG + item.poster_path}`} />
               </button>
    })

 
    const title = list.map((item) => {
        return <p>{item.title}</p>
    })

    const sinopse = list.map((item) => {
        return <p>{item.overview}</p>
    })

     const id = list.map((item) => {
        return <p>{item.id}</p>
    })

    return (
        
        <div>
            <HeaderHome>
                <Body>
                    <BoxButton>
                       {detalhes.genres && detalhes.genres.map((item)=>{
                           return <p>{item.name}</p>
                       })}

                       
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