import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContanerPlay = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border:  2px solid black;
padding: 10px;
margin: 10px;



`

class Play extends React.Component{
render(){
    return(
        <ContanerPlay>
            <h1>Renderizar PlayList</h1>
            <button onClick={this.props.irParaHome}>aqui vc vai para tela home</button>
        </ContanerPlay>
    )
}
}export default Play