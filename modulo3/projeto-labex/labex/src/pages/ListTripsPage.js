import React from "react";
import { useHistory } from "react-router-dom";

export function ListTripsPage() {
  const history = useHistory();

  
  const gotHome = () => {
    history.goBack() 
  };
  const goHome = () => {
    history.push("/") 
  };

  return (
    <div>
      ListTripsPage
      <button onClick={gotHome}>Voltar</button>
      <button onClick={goHome}>home</button>
    </div>
  );
}
