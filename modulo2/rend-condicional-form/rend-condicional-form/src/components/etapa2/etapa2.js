import React from 'react';

export default class Etapa2 extends React.Component {

  render(){

  return (
    <div>
     <h1>ETAPA 2 - INFORMAÇÃO DO ENSINO SUPERIOR </h1>

     <p> 5. Qual curso?</p>
     <input></input>

     <p> 6. Qual é a unidade de ensino?</p>
     <input></input>

     
    <button onClick ={this.props.onClicketapa2}>Próxima etapa</button>

    </div>
  );
}
}
