import styled from "styled-components";
import { ListTripsPage } from "./ListTripsPage";

// ---- ÁREA PARA PAGINA ListTripsPage.JS ----//
export const Cards = styled.div`
  display: grid;
  width: 400px;
  height: 330px;
  border: 2px solid black;
  margin: 50px;
  justify-content: center;
`;

// ---- ÁREA PARA PAGINA HomePage.JS ----//

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center button {
    margin: 3px;
    width: 150px;
    height: 50px;
    margin-top: 150;
    
  }
`;
export const ContainerHomeGeneral = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerListGeneral = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid black;
  justify-content: space-around;
  
  button {
    margin: 15px;
    width: 150px;
    height: 50px;
    justify-content: center;
    
  }
`;
