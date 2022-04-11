import { Request, Response } from "express";
import { CadastroBusiness } from "../business/cadastroBusiness"
import { CriarNovamente } from "../Endpoints/CriarCompeticao/CriarCompeticao";

const businessDB = new CadastroBusiness (new CriarNovamente() );

export class CadastroControler {
  
    public CriarCompeticao = async (req: Request, res: Response) => {
        
        try {
            const { competicao, atleta, valor, unidade } = req.body
             await businessDB.fazerCadastro(
                competicao,
                atleta,
                valor,
                unidade  
                )


            res.status(201).send("Criado com Sucesso!")

        } catch (error: any) {
            res.status(500).send(error.sqlmessage || error.message)
        }

    }


    // PegarCompetidores = async (req: Request, res: Response) => {
    //     const { unidade } = req.params
    //     try {
    //         const resultado = await this.getConnection().raw(

    //             `SELECT  atleta, valor 
    //         FROM   Competicao_criar
    //         WHERE unidade = ${unidade}
    //         ORDER BY valor ASC;
    //          `
    //         )

    //         res.status(201).send({ resultado: resultado[0] })

    //     } catch (error: any) {
    //         res.status(500).send(error.sqlmessage || error.message)
    //     }

    // }
}