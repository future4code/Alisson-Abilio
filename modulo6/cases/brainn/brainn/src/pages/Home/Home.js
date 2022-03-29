import React, { useEffect, useState } from "react";
import { getLoteria } from "../../api/request";
import { BoxRight, BoxLeft, ContainerInferior, CotainnerGenaral, NameCenter, ContainnerSelector } from "./styled";

function getId(){return item.id}

export const Home = () => {
    const [loteria, setLoteria] = useState([])

    useEffect(() => {
        getLoteria(setLoteria)
    }, [])

    const result = loteria && loteria.map((item) => {
        return <optionon Click={()=>{getId(item)}}>{item.nome}</optionon>
    })
    return (
        <CotainnerGenaral>
            <ContainnerSelector>
                <select >
                    {result}
                </select>
            </ContainnerSelector>
            <ContainerInferior>
                <BoxLeft>
                    <NameCenter>
                        <p>{result[2]}</p>
                    </NameCenter>
                </BoxLeft>
                <BoxRight>
                    <p>1</p>
                    <p>6</p>
                    <p>4</p>
                    <p>9</p>
                    <p>0</p>
                </BoxRight>
            </ContainerInferior>
        </CotainnerGenaral>
    )
}