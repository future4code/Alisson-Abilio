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
    <div className="App">
      loginPage
      <button onClick={goHomer}>voltar</button>
      <button onClick={goAdmHome}>admHome</button>
      <div>
        <input type="email" value={""}></input>
        <input type="password" value={""}></input>
      </div>
    </div>
  );
}
