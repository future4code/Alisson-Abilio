import React from "react";
import { useHistory } from "react-router-dom";

export function LoginPage() {
  const history = useHistory();

  const goHomer = () => {
    history.push("/");
  };

  const goAdmHome = () => {
    history.push("/adimim");
  };
  return (
    <div>
      loginPage
      <button onClick={goHomer}>voltar</button>
      <button onClick={goAdmHome}>admHome</button>
      <div>
       <br></br>
       <br></br>
        <input type="email" placeholder="E-mail" value={""}></input>
       <br></br>
       <br></br>
        <input type="password" placeholder="Senha" value={""}></input>
      </div>
    </div>
  );
}
