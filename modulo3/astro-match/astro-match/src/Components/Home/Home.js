import { useState, useEffect } from "react";
import axios from "axios";
import { BoxButoon, Card, ContainerGeneral, Details, Header } from "./sytled";
import React from "react";

function Home(props) {
  const [perfil, setPerfil] = useState([]);
  const [continuar, setContinuar] = useState(0);
  const [like, setLeke] = useState();

  useEffect(() => {
    GetProfileToChoose();
  }, [continuar]);

  // Funcäo para trocar de cards

  const proximoPerfil = () => {
    console.log("aqui é uma props", props);
    setContinuar(continuar + 1);
  };

  const curtirPerfil = (like) => {
    setLeke(like);
    proximoPerfil();
    ChoosePerson();
  };

  // A função GetProfileToChoose ta OK!
  const GetProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alisson-carver/person `
      )
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((err) => {});
  };

  const ChoosePerson = () => {
    const body = {
      id: perfil.id,
      choice: like,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alisson-carver/choose-person`,
        body
      )
      .then((res) => {
        console.log("aqui", res);
      })
      .catch((err) => {});
  };
  const Clear = () => {
    axios.put(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alisson-carver/clear`
    );
  };

  return (
    <ContainerGeneral>
      <Card>
        <Header>
          <h1>Astro-Metch</h1>
          <button onClick={props.TrocarDeTelaHome}>❤️</button>
        </Header>
        <Details>
          <img src={perfil.photo}></img>
          <p>
            Nome:{perfil.name}, Idade:{perfil.age}
          </p>
          <p>{perfil.bio}</p>
          <BoxButoon>
            <button onClick={() => curtirPerfil(true)}>Like</button>
            <button onClick={Clear}>Limpar</button>
            <button onClick={() => curtirPerfil(false)}>Dislike</button>
          </BoxButoon>
        </Details>
      </Card>
    </ContainerGeneral>
  );
}

export default Home;
