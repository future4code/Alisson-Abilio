import React from "react";
import axios from "axios";
import styled from "styled-components";

const Containerlist = styled.div`

border: 1px solid black;
padding: 10px;
margin: 10px;
width: 50%;
display: flex;
justify-content: space-between;
`



class Lista extends React.Component{
    state = {
        cadastrados: []
    }

    componentDidMount(){
        this.getAllUsers()
    }

getAllUsers =() =>{
axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
         {
             headers: {
                 Authorization: "alisson-abilio-carver"
             }
         }
        ).then((res) => {
            this.setState({cadastrados: res.data})
         
        }
        ).catch((err) => {
            alert("Não ta na the black list")
           
        })
   
   
    }

 deletarCadastrado = (id) => {
     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
axios.delete(url,{
            headers: {
                Authorization: "alisson-abilio-carver"
            }
        }).then((res) => {
            alert("Usúario Deletado")
            this.getAllUsers()
        }

        ).catch((err) => {
            alert("Não foi passivel delatar")
        })
    }
render(){
    
    const listaDeCadastrados = this.state.cadastrados.map((user) => {
        return <Containerlist
         key={user.id}>{user.name}
         <button onClick={() => this.deletarCadastrado(user.id)}>Deletar Usúario</button>
        </Containerlist>
    })
  
    return(
        <div>
                <div>
                <button onClick= {this.props.onclickReg}>Ir para Cadastro</button>
                <>
                <h2>Lista de Usúario</h2>
                <ul>{listaDeCadastrados}</ul>
                </>
                </div>
                </div>
            
    )
    }

}
export default Lista