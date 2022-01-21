import React from 'react';
import Lista from './Components/list';
import Registration from './Components/registration';



class App extends React.Component {
  state = {
    login: true
  }

  logar =() => {
    this.setState({
      login: true
    })
  }

  logout =() => {
    this.setState({
      login: false
    })
  }

  render() {

    let pagina

    if (this.state.login){
        pagina = <Registration onclickList = {this.logout} />  
    }
    
    else{

      pagina = <Lista onclickReg = {this.logar} />
    }


    return (


      <div>
       {pagina}
      </div>
    )
  }
}
 export default App;
