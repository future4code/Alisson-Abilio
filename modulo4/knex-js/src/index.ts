import { Request, Response } from "express"
import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from "./connection";


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


// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}



// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.send()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})


// FUNÇÃO QUE BUSCA O NOME DO ATOR ---EXERCICIO 1B

app.get("/name/:name", async (req: Request, res: Response): Promise<void> => {
    try {
        const pegarNome = await connection.raw
            (` select * from Actor where name = "${req.params.name}"; `)
        res.status(200).send({ result: pegarNome[0] })
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// FUNÇÃO PARA CONTAR OS GENEROS -- EXERCICIO 1C
app.get("/atores/:gender", async (req: Request, res: Response): Promise<void> => {
    try {
        const verSexo = await connection.raw
            (`SELECT COUNT(*) as count FROM Actor WHERE gender = "${req.params.gender}"`)
        res.status(200).send(verSexo[0])
    }
    catch (error: any) { res.status(500).send(error.sqlMessage || error.message) }
})

// FUNÇÃO PARA CONTAR OS GENEROS -- EXERCICIO 2A

app.put("/alterar/:id", async (req: Request, res: Response): Promise<void> => {
    try { const alterarSalario = await connection.raw
        (`update Actor set salary =  salary: "${ req.body.salary}" where id = "${req.params.id}"`)

        res.status(200).send(alterarSalario)
    } 
catch (error: any) { res.status(500).send(error.sqlMessage || error.message)}

})