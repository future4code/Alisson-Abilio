import React from 'react';

export default class Etapa1 extends React.Component {

  render(){

  return (
    <div>
     <h1>ETAPA 1 - DADOS GERAIS</h1>

     <p> 1. Qual é o seu nome?</p>
     <input></input>

     <p> 2. Qual é a sua idade?</p>
     <input></input>

     <p> 3. Qual é o seu email?</p>
     <input></input>

     <p> 4. Qual a sua escolaridade?</p>

    <select>
        <option>Ensino médio incompleto</option>
        <option>Ensino médio completo</option>
        <option>Ensino superior completo</option>
        <option>Ensino superior imcompleto</option>
        
    </select>
    <br/>
    <br/>
     
    <button onClick ={this.props.onClicketapa2}>Próxima etapa</button>

    </div>
  );
}
}
