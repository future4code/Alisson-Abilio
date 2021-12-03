
import {useState, useEffect} from "react"
import Home from "./Components/Home/Home";
import Match from "./Components/Match/Match";



function App() {
const [tela, setTela] = useState()
const [telaNova, setTelaNova] = useState()

  // useState(()=>{
  //   setTela(<Home irParaOMatch={trocarDeTelaHome()}/>)
  // },[])


  const trocarDeTelaHome = ()=>{
    setTela( <Match/>)
  }

  const trocarDeTelaMatch = ()=>{
    setTela(
      <Home/>)
  }
  
  return (
    <div>
    {tela}
    <button onClick={trocarDeTelaMatch}>home</button>
    <button onClick={trocarDeTelaHome}>match</button>
    </div>
    
  );
}

export default App;



