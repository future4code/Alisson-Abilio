import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import alisson from "./img/alisson.jpg";
import alisson1 from "./img/alisson-natan.jpg"
import alisson2 from "./img/familia.jpg"
import alisson3 from "./img/marilia.jpg"
import alisson4 from "./img/marilia-alisson.jpg"
import alisson5 from "./img/natan.jpg"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'alisson_abilio'}
          fotoUsuario={alisson}
          fotoPost={alisson2}
        />

        <Post
          nomeUsuario={'marilia_meire'}
          fotoUsuario={alisson3}
          fotoPost={alisson4}
        />

        <Post
          nomeUsuario={'natan_abilio'}
          fotoUsuario={alisson5}
          fotoPost={alisson1}
        />
      </MainContainer>
    );
  }
}

export default App;
