import React from 'react';

export default class Etapa1 extends React.Component {

  render(){

  return (
    <div>
     <h1>ETAPA 3 - INFORMAÇÕES GEREIS DE ENSINO</h1>

     <p> 5. Por que você não terminou o curso de graduação ?</p>
     <input></input>

   

     <p> 6. Você tem algum curso complementar?</p>

    <select>
        <option>Nenhum</option>
        <option>Curso técnico </option>
        <option>Curso de inglês</option>
    </select>
    <br/>
    <br/>
     
    <button onClick ={this.props.onClicketapa3}>Próxima etapa</button>

    </div>
  );
}
}
