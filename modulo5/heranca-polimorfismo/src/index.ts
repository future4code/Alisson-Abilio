import { AddressInfo } from "net";
import express, { Express } from 'express'
import cors from 'cors'
import { User } from "./user";
import { Customer } from "./customer";
const app: Express = express();
app.use(express.json());
app.use(cors());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


//--------------------------//-----------------//--------------------//

//Exericios

//1-
// Analise a classe User. Perceba quais propriedades são públicas
// e quais são privadas. Copie esse código para o seu exercício de hoje; 
// crie uma instância dessa classe (dê o nome, email, etc que você quiser)
// e imprima, no terminal, o id, o nome e o email desse usuário. 

//a) Seria possível imprimir a senha (password) atrelada a essa instância?
    // sim, totalmente possivel.

//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
    //apenas uma vez.




const novoUsuario= new User  (   
    "5",
    "aliss@aline",
    "laurra",
    "102030"
)



const cliente = new Customer (
    "2",
    "aline@aline",
    "Aline", 
    "102030",
    "nunbakn"
    ) 
    // console.log(cliente)