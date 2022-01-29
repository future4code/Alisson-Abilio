import express, { Request, response, Response } from "express";

import { AddressInfo } from "net";
import { bancoDados } from "./dados";

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


app.get("/contas", (req: Request, res: Response) => {
    res.send(bancoDados)
})

app.get("/contas/procurar", (req: Request, res: Response) => {
    let resultado = []
    let dadosCPF = req.query.cpf
    if (!dadosCPF) {
        res.status(400).send("Inserir o Nome ou o CPF para fazer consulta")
    }
    for (let conta of bancoDados) {
        if (conta.cpf === dadosCPF) {
            resultado.push(conta)
        }
    }
    res.send({resultado: resultado})
} )

app.post("/adicionar/conta", (req: Request, res: Response) => {
    const dadosCPF = req.headers.authorization
    const dadosName = req.body.name
    const dadosData = req.body.data
    const dadosSaldo = req.body.saldo



    bancoDados.push({
        name: dadosName,
        cpf: dadosCPF,
        data: dadosData,
        saldo: dadosSaldo,
        extrato: [],

    })
    res.send({ bancoDados })
})

app.post("/adicionar/dividas", (req: Request, res: Response) => {

    let dadosValor = req.body.valor
    let dadosDescrição = req.body.descrição
    let dadosCPF = req.headers.authorization

    for (let i = 0; i < bancoDados.length; i++) {
        if (bancoDados[i].cpf === dadosCPF) {
            bancoDados[i].extrato.push({
                valor: dadosValor,
                descrição: dadosDescrição
            })
        }
    }

    res.send({ bancoDados })
})