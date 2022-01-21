import React from "react";
import axios from "axios";



class Registration extends React.Component{
    state = {
        inputNome: '',
        inputEmail: '',
       

    }

       
    extractImputNome = (event) => {
        this.setState({inputNome: event.target.value})

    }
    extractImputEmail = (event) => {
        this.setState({inputEmail: event.target.value})

    }




    

        createUser =() =>{

         const body = {
             name: this.state.inputNome,
            email: this.state.inputEmail
            }

            axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,{
                headers: {
                    Authorization: "alisson-abilio-carver"
                }
            }).then((res) => {
                alert("usuario Cadastrado.")
                this.setState({inputNome:"", inputEmail:""})
                
                
                
            }).catch((err)=>{
                alert("usuario nao Cadastrado.")
                
            })
        }

    
 

    render(){
        

        return(
                
            <div>

               
                <>
                <button onClick = {this.props.onclickList} > Ir para Lista</button>
                 <h2>Cadastro de Usúario</h2>

                    nome:
                    <input
                     placeholder={"nome do usúario"}
                     value={ this.state.inputNome}
                     onChange= {this.extractImputNome}>
                    </input>

                    <br/>
                    <br/>

                    email: 
                    <input
                    placeholder={"email do usúario"}
                    value={this.state.inputEmail}
                    onChange= {this.extractImputEmail}>
                    </input>
                    
                    <br/>
                    <br/>

                    <button onClick={this.createUser}>Criar</button>
                
                </> 
            </div>
        )
    }
}export default Registration; 