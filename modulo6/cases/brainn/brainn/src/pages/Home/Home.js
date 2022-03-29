import React from "react";

import { BoxRight, BoxLeft, ContainerInferior, CotainnerGenaral, NameCenter, ContainnerSelector } from "./styled";
export const Home = () => {
    return (
        <CotainnerGenaral>
            <ContainnerSelector>
            <select>
                    <option>MEGA-SENA</option>
                    <option>QUINA</option>
                    <option>LOTOFACIL</option>
                    <option>LOTOMANIA</option>
                    <option>TIMEMANIA</option>
                    <option>DIA DE SEORTE</option>
                </select>
            </ContainnerSelector>
            <ContainerInferior>
            <BoxLeft>
                <NameCenter>
                    <p>MEGA-SENA</p>
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