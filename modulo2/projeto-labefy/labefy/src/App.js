import React from "react";
import Play from "./play";
import Home from "./home";




class App extends React.Component {
state = {
  telaAtual: "home"
}

escolherTela = () =>{
  switch (this.state.telaAtual){
    case "home":
    return <Home irParaplay={this.irParaplay}/>
    case "play":
      return<Play irParaHome={this.irParaHome}/>
    default:
      return <h1>Erro! :(</h1>
  }
}

irParaHome = () =>{
  this.setState({telaAtual: "home"})
}

irParaplay = () =>{
  this.setState({telaAtual: "play"})
}

  render(){

    return(

      <div>
        {this.escolherTela()}

      </div>
      
    )
  }
 
}  

export default App;

