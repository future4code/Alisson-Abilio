import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ContainerListGeneral } from "./styled";

export function ApplicationFormPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [text, setText] = useState("");
  const [Occupation, setOccupation] = useState("");

  // FUNÇÃO PARA IR PARA A PIGINA LIST TRYP ---------------------

  const history = useHistory();

  const golist = () => {
    history.push("/list");
  };

  // FUNÇAO PARA INSCREVER-SE PARA VIAGEM ------------------------

  const body = {
    name: "ROBERT",
    age: 25,
    applicationText: "Quero muuuuuuito ir!!!",
    profession: "Chefe",
    country: "Brasil",
  };
  const ApplyToTrip = () => {
    console.log(body);
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alisson-abilio-carver/trips/ANeRrIBuMd0wuOVppvsu/apply",
        body
      )
      .then((res) => {
        console.log("aqui a res", res);
      })
      .catch((err) => {
        console.log("aqui o erro", err);
      });
  };

  // FUNÇAO PARA USAR O INPUT

  const getInputName = (event) => {
    setName(event.target.value);
  };

  const getInputAge =((event)=>{
    setAge(event.target.value)
  })
  const getInputText = ((event)=>{
    setText(event.target.value)
  })
  const getInputOccupation =((event)=>{
    setOccupation(event.target.value)
  })
  return (
    <div>
      <ContainerListGeneral>
        <h1>ApplicationFormPage</h1>
        <button onClick={golist}>Voltar</button>{" "}
      </ContainerListGeneral>{" "}
      <br></br> <br></br>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
      <br></br>
      <br></br>
      <input type={"text"} value={name} onChange={getInputName} placeholder="Nome"></input>
      <br></br>
      <br></br>
      <input type={"number"} value={age} onChange={getInputAge} placeholder="Idade"></input>
      <br></br>
      <br></br>
      <input type={"text"}  value={text} onChange={getInputText} placeholder="Texto de Candidatura"></input>
      <br></br>
      <br></br>
      <input type={"text"} value={Occupation} onChange={getInputOccupation} placeholder="Profissão"></input>
      <br></br>
      <br></br>
      <button onClick={ApplyToTrip}>Enviar Inscrição</button>
    </div>
  );
}
