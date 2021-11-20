import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContanerGeneral = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border:  2px solid black;
padding: 10px;
margin: 10px;

`
const ContainerDeButton = styled.div`
display: grid;
border: 2px solid red;
width: 20%;
height: 500px;
padding: 10px;
margin: 10px;

button{
    display: grid;
    width: 150px;
    height: 40px;
    margin: 10px;
    font-size: 30px;
}
`
const Containerinformação = styled.div`
 display: grid;
border: 2px solid red;
width: 20%;
height: 500px;
padding: 10px;
margin: 10px;

`
const ContainerCentral = styled.div`
 display: flex;
 
`


const Containeradicionar = styled.div`
 display: grid;
border: 2px solid red;
width: 50%;
height: 500px;
padding: 10px;
margin: 10px;

button{
    width: 100px;
    height: 30px;
    margin: 5px;
}

input{
    width: 150px;
    height: 30px;
    
}

`
const ContainerAddPlayList = styled.div`

border: 2px solid black;

`


const ContainerAddMusicas = styled.div`

border: 2px solid black;
`


class Home extends React.Component{

    state = {
        playList: [],
        inputPlaylist:'',
        playlistHits: '',
        playlistOnnowID:'',
        playlistOnnowID:'',
    }


        componentDidMount(){
            this.getAllPlaylists()

        }

        pegarInputPlayList =(event) =>{

            this.setState({inputPlaylist: event.target.value})

        }


    getAllPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        {
            headers: {
                Authorization: "alisson-abilio-carver"
            }
        }
       ).then((res) => {
           this.setState({playList: res.data.result.list})
           
        }
        ).catch((err) => {
           console.log(err)
          
          
       })
        
        
    }

    getPlaylistTracks = (id, name) => {
const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/070a4fb6-d0bc-4d5e-b29f-2b39cf832492/tracks`
        axios.get(url,{
            headers: {
            Authorization: "alisson-abilio-carver"
            }
        }).then((res)=>{
            console.log("ccccerto",res)
            this.setState({playlistHits: res.data.result.tracks})
            this.setState({playlistOnnowID: id})
            console.log("aqui o id",id)
            this.setState({playlistOnnowID: name})
           console.log("aqui o nome", res.data)
        }).catch((err) => {
            console.log( "eeerrado", err.response)
        })
    }


    createPlaylist = () => {
        const body = {
            name: this.state.inputPlaylist
        }
        axios.post(
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
        {
            headers: {
                Authorization: "alisson-abilio-carver"
            }
        }
        ).then((res) =>{
            alert("a play liste  foi criada com sucesso")
            this.getAllPlaylists()
            this.setState({inputPlaylist: ""})
        }).catch((err)=>{
            alert("acho que a playlist já existe!")
        })
    }


  render(){
     const mostrasPlayList = this.state.playList.map((item) =>{
        
         return(
     <button> {item.name}</button>
     )
     } )
     
     const mostrasMusicas = this.state.playList.map((item) =>{
         return(
     <button> {item.id}</button>
     )
     } )
     


    return(
       
       <div>

            <ContanerGeneral>
             <h1>Home</h1>
             <button onClick={this.props.irParaplay}>aqui vc vai para tela play</button>
            </ContanerGeneral>
            <ContainerCentral>
            <ContainerDeButton>
              <h3>playlists</h3>  
                <div>
              {mostrasPlayList}
              </div>
            </ContainerDeButton>

                <Containeradicionar>
                    <ContainerAddPlayList>
                <h3>Adicionar playList </h3>
                <box>
                <input 
                placeholder={"play list"}
                value={this.state.inputPlaylist}
                onChange={this.pegarInputPlayList}
                >

                </input>
                <button onClick= {this.createPlaylist}>criar play list</button>
                </box>
                  </ContainerAddPlayList>
                  <ContainerAddMusicas>
                  <h3>Adicionar musicas </h3>

                  <>nome:</>
                  <input
                  ></input>
                  <br/>
                  <>artita:</>
                  <input></input>
                  <br/>
                  <>url:</>
                  <input></input>
                      

                  </ContainerAddMusicas>
                </Containeradicionar>

            <Containerinformação>
                <h3>Musicas</h3>
                <div>
              {mostrasMusicas}
              </div>

                <button onClick={this.getPlaylistTracks} ></button>
            </Containerinformação>

        </ContainerCentral>
        </div>

     )
 }
}export default Home