import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { afazeres } from "./dadosexer1";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

// exercício -1 --------------
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})
// exercício -2 --------------
app.get("/tarefas", (req: Request, res: Response) => {
    res.send(afazeres)

})
// exercício -3 --------------
app.get("/tarefasRealizadas", (req: Request, res: Response) => {
    let afazeresOk = []

    for (let i = 0; i < afazeres.length; i++) {
        if (afazeres[i].completed === true) {
            afazeresOk.push(afazeres[i])
        }
    }
    res.send(afazeresOk)

})
// exercício -4 --------------
app.get("/tarefasNaoRealizadas", (req: Request, res: Response) => {
    let naoFeitas = []

    for (let i = 0; i < afazeres.length; i++) {
        if (afazeres[i].completed !== true) {
            naoFeitas.push(afazeres[i])

        }
    }
    res.send(naoFeitas)

})
// exercício -5 --------------
app.post("/adicionarTarefas", (req: Request, res: Response) => {
    const { userId, id, title, completed } = req.body

    afazeres.push({
        userId,
        id,
        title,
        completed,

    })


    res.send(afazeres)
})
app.delete("/deletartarefa/:id", (req: Request, res: Response) => {
    let pegarID = Number(req.params.id)

    res.send (afazeres.filter((id) => {
        if (pegarID !== id.id) { return id }
    }
    ))
    
})
