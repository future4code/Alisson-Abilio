import axios from "axios"
import { baseURL } from "./baseURL"

const pegarTodosAssinentes = async ()=> {
    return await axios
    .get(`${baseURL}/subscribers`)
    .then(res => res.data)
    .then(console.log)
}
pegarTodosAssinentes()