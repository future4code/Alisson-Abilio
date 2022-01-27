import express, { Request, response, Response } from "express";

import { AddressInfo } from "net";
import { send } from "process";
import { User } from "./cadastrados";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3001, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.get("/test", (req: Request, res: Response) => {
    res.send("ta funcionando!")
})

app.get("/cadastro", (req: Request, res: Response) => {
    res.send(User)

})
//imprimir array
app.get("/pesquisar", (req: Request, res: Response) => {
    const cadastroId = req.query.id
    if (!cadastroId) {
     console.log(cadastroId)
        res.status(400).send("Faltou a query name, prencher com 'predio1' ou 'predio2' ")
    }

    const result  = {  

    }
  

})


app.post("/cadastro/:id", (req: Request, res: Response) => {
    const adicionarCadId = req.params.cadastroid
    const { idUser, name, phone, email, adm } = req.body

    // if(adicionarCadId === "predio1" ){}

    for (let i = 0; i < User.length; i++)
        if (User[i].id === adicionarCadId) {
          
            res.send(User.push({
                idUser: Date.now().toString(),
                name,
                phone,
                email,
                adm
            }))
        }


}) 