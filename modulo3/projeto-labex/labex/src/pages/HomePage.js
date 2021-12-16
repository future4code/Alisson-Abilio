import React from "react";
import { useHistory } from "react-router";
import { ContainerHome, ContainerHomeGeneral } from "./styled";

export function HomePage() {
  const history = useHistory()

    const gotList = () => {
      history.push("/list")
    }

    const goLogin = ()=>{
    history.push("/login")
    }
  return (
    <div>
    <ContainerHomeGeneral>
    <h1>Labex</h1>
    </ContainerHomeGeneral>
    <ContainerHome >
    <button onClick={gotList}>Ver Viagens</button>
    <button onClick={goLogin}>Área Adimin</button>
    </ContainerHome>
    </div>
  );
}

