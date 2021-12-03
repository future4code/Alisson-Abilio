import { useState, useEffect } from "react";
import axios from "axios";
import { BoxButoon, Card, ContainerGeneral, Details, Header } from "./sytled";

function Home(props) {
  const [perfil, setPerfil] = useState([]);

  const GetProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alisson-abilio-carver/person `
      )
      .then((res) => {
        setPerfil(res.data.profile);
        console.log(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerGeneral>
      <Card>
        <Header>
          <h1>Astro-Metch</h1>
          <button onClick={props.trocarDeTelaHome}>❤️</button>
        </Header>
        <Details>
          <img src={perfil.photo}></img>
          <p>
            Nome:{perfil.name}, Idade:{perfil.age}
          </p>
          <p>{perfil.bio}</p>
          <BoxButoon>
            <button onClick={GetProfileToChoose}>Procurar</button>

            <button>Apagar</button>
          </BoxButoon>
        </Details>
      </Card>
    </ContainerGeneral>
  );
}

export default Home;
