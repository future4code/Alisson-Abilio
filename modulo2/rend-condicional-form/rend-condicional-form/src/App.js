import React from 'react';
import Etapa1 from "./components/etapa1/atapa1";
import Etapa2 from './components/etapa2/etapa2';

export default class app extends React.Component {
  state = {
    etapa1: true
  }
  logar1 = () => {
    this.setState({
      etapa1: false
    })
  }
  logar2 = () => {
    this.setState({
      etapa1: true
    })
  }


  render(){
    let pagina1
    
    if(this.state.etapa1){

      pagina1 = <Etapa1 onClicketapa2 = {this.logar1}/>

    }else {

      pagina1 = <Etapa2 onClicketapa2 = {this.logar2}/>
    }

  return (
    <div>
    {pagina1}

    </div>
  );
}
}
