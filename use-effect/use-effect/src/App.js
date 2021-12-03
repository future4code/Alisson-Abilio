// import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

const App = ()=>{
  // state = {
  //   // lista de pokemons que está sendo guardada no estado
  //   pokeList: [],
  //   // nome do pokemon guardado no estado, assim que o usuário
  //   // escolhe um nome no dropdown
  //   pokeName: ""
  // };
  const [pokelist, setPokelist] = useState([])
  const [pokeName, setPokeName] = useState()
  
  useEffect (()=> {
    pegarlista()
  },[])

  // método que roda após a montagem do componente
  // componentDidMount = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    const pegarlista = () => {axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokelist(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  };

   const ChangePokeName =(event) => {
    setPokeName(event.target.value)
  }

   
    return (

      



      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={ChangePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {setPokeName && <PokeCard pokemon={setPokeName} />}
      </div>
    );
  
}

export default App;
