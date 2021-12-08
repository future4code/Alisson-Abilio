import { useState } from "react";
import Home from "./Components/Home/Home";
import Match from "./Components/Match/Match";
import React from "react";

function App(props) {
  const [tela, setTela] = useState();
  // const [telaNova, setTelaNova] = useState()

  // useState(()=>{
  //   setTela(<Home irParaOMatch={trocarDeTelaHome()}/>)
  // },[])

  const TrocarDeTelaHome = () => {
    setTela(<Match trocarDeTelaHome={() => TrocarDeTelaHome()} />);
  };

  const TrocarDeTelaMatch = () => {
    setTela(<Home />);
  };

  return (
    <div>
      {tela}
      <button onClick={TrocarDeTelaMatch}>home</button>
      <button onClick={TrocarDeTelaHome}>match</button>
    </div>
  );
}

export default App;
