import mediaquery from "mediaquery";
import styled from "styled-components";
import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const lotoColor = {

    megasena: 'rgba(107, 239, 163, 1)',

    quina: 'rgba(134, 102, 239, 1)',

    lotofacil: 'rgba(221, 122, 198, 1)',

    lotomania: 'rgba(255, 171, 100, 1)',

    timemania: 'rgba(90, 173, 125, 1)',

    diadesorte: 'rgba(191, 175, 131, 1)',

    textColor: 'rgba(225, 225, 255, 1)'

}

  const pegarCor =(cor)=>{

    if(cor === 0 ){
        return `background-color: ${lotoColor.megasena}`
    }
    if(cor === 1 ){
        return `background-color: ${lotoColor.quina}`
    }
    if(cor === 2 ){
        return `background-color: ${lotoColor.lotofacil}`
    }
    if(cor === 3 ){
        return `background-color: ${lotoColor.lotomania}`
    }
    if(cor === 4 ){
        return `background-color: ${lotoColor.timemania}`
    }
    if(cor === 5 ){
        return `background-color: ${lotoColor.diadesorte}`
    }

}


export const CotainnerGenaral = styled.div`
display: grid;
grid-template-columns: repeat (auto-fit, minmax(25%, 1fr));
grid-template-rows: 1fr;
height: 100vh;
${({cor}) => pegarCor(cor)}

` 

export const ContainnerResults = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 100vh;
color: black;
background-color: rgb(239, 239, 239);
border-radius: 20% 0% 0% 20%;

.resultados-numeros {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10rem;
}
`
export const BoxResult = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 1rem;
height: 4rem;
width: 4rem;
border-radius: 50%;
background-color:  white;
`

export const ContainnerSelect = styled.div`
display: grid;
color: white;
font-weight: bold;
align-content: space-between;
justify-items: center;
border-radius: 0% 200% 200% 0%;
`
export const BoxSelect = styled.div`
margin: 1rem;
select {
    height: 2rem;
    width: 10rem;
}
`

