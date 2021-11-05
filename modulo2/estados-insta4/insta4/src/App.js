import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import img from './img/img.jpg'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'

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
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'alisson_abilio'}
          fotoUsuario={img1}
          fotoPost={img2}
        />

        <Post
          nomeUsuario={'marilia_meire'}
          fotoUsuario={img}
          fotoPost={img2}
        />
      </MainContainer>
    );
  }
}

export default App;
