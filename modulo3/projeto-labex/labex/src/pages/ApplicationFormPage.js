import  axios  from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { ContainerListGeneral } from "./styled";

export function ApplicationFormPage() {
  const history = useHistory();

  const body = {
    name: "ROBERT",
    age: 25,
    applicationText: "Quero muuuuuuito ir!!!",
    profession: "Chefe",
    country: "Brasil",
  }
  const ApplyToTrip = (() => {
    console.log(body)
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alisson-abilio-carver/trips/ANeRrIBuMd0wuOVppvsu/apply",body)
      .then((res) => {
        console.log("aqui a res", res);
      })
      .catch((err) => {
        console.log("aqui o erro", err);
      });
  })
  const golist = () => {
    history.push("/list");
  };

  return (
    <div>
         <ContainerListGeneral>
         <h1>ApplicationFormPage</h1>
        <button onClick={golist}>Voltar</button>      </ContainerListGeneral>       <br></br>       <br></br>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
      <br></br>
      <br></br>      <input placeholder="Nome"></input>
     <br></br>
      <br></br>
       <input placeholder="Idade"></input>
       <br></br>
       <br></br>
       <input placeholder="Texto de Candidatura"></input>
       <br></br>
       <br></br>
       <input placeholder="Profissão"></input>
       <br></br>
     <br></br>
      <button onClick={ApplyToTrip}>Enviar Inscrição</button>
    </div>
  );
}
