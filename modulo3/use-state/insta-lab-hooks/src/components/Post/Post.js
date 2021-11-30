import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
const [Curtido, setCurtido] = useState(false)
const [NumeroCurtida, setNumeroCurtido] = useState(0)
const [Comentando, setComentado] = useState(false)
const [NumerosComentarios, setNumeroComentarios] = useState(0)
const [Comentario, setComentario] = useState()


  const onClickCurtida = () => {
    // verifica se, no estado, cutido é true ou false
    if (Curtido) {

      // se for true, entra nesse caso, e o estado é modificado de acordo com esses comandos:
    setCurtido({
        Curtido: !Curtido,
        NumeroCurtida: NumeroCurtida - 1
      })
    } else {

      // se for false, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      setCurtido({
        Curtido: !Curtido,
        NumeroCurtida: NumeroCurtida + 1
      })
    }
  }
  };
  
  
  const onClickComentario = () => {
    
    setComentario({
    Comentando: !Comentando
    })
  }
  
  const enviarComentario = (comentario) => {
  }
  
  const iconeCurtida = Curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {{caixaDeComentario} }
    </PostContainer>
  )


export default Post