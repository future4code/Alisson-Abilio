import { Address } from "../types/Address";
import axios from "axios";

// https://viacep.com.br/ws/${cep}/json/ 

const BASE_URL = "https://viacep.com.br/ws"

export const getAddressInfo = async (cep: number):Promise <Address | null> =>{

    try {

        
        const response = await axios.get(`${BASE_URL}/${cep}/json/`)
        const Address: Address = {
            
            state: response.data.uf,
            city: response.data.localidade, 
            district: response.data.bairro,
            street: response.data.logradouro
            
        } 
      const result =   (`INSERT INtO Servicos_Backend
        ( CEP, Logradouro, Numero,Complemento, Bairro, Cidade, Estado) 
         values (
             
             "${response.data.CEP}",
             "${response.data.Logradouro}",
             "${response.data.Número}", 
             "${response.data.Complemento}",
             "${response.data.Bairro}",
             "${response.data.Cidade}",
             "${response.data.Estado}",
             )`)

        return Address
    }catch (error){
        console.log("erro no serviço getAddresssInfo",error)
        return null
    }


}

