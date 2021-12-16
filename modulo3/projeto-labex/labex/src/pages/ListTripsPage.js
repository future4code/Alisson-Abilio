import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Cards, ContainerListGeneral } from "./styled";

export function ListTripsPage() {
  const [listTrip, setListTrip] = useState([]);

  const history = useHistory();

  useEffect(() => {
    seeList();
  }, []);
  const seeList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alisson-abilio-carver/trips"
      )
      .then((res) => {
        setListTrip(res.data.trips);
        console.log("reposta", res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goHome = () => {
    history.push("/");
  };

  const goapplication = () => {
    history.push("/application");
  };

  const listplanet = listTrip.map((item) => {
    return (
      <Cards>
        <p>NOME:{item.name}</p>
        <p>PLANETA:{item.planet}</p>
        <p>DURAÇÃO:{item.durationInDays}</p>
        <p>DESCRIÇÃO:{item.description}</p>
        <p>Dias:{item.durationInDays}</p>
        <p>Dias:{item.date}</p>
      </Cards>
    );
  });

  return (
    <div>
      <ContainerListGeneral>
        <h1>Lista de Opção de Viagens.</h1>

        <button onClick={goHome}>Voltar</button>
        <button onClick={goapplication}>Inscrever-se</button>
      </ContainerListGeneral>

      <lo>{listplanet}</lo>
    </div>
  );
}
