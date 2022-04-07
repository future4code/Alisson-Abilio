import {  Request, Response } from "express";
import { connection } from "../../Data/ConnectionData";



export const CriarCompeticao =async(req:Request, res:Response) =>{

    try{
        const { competicao, atleta, valor,unidade}  = req.body
        const id = Date.now().toString()
        const resultado = await connection.raw(
            `insert into Competicao_criar values (
                "${id}",
               " ${competicao}",
               " ${atleta}",
                 ${valor},
                "${unidade}"
                )`
            ) 
            res.status(201).send(resultado)

        }catch(error : any){
        res.status(500).send(error.sqlmessage|| error.message)
    }

}
export const PegarCompetidores =async(req:Request, res:Response) =>{

    try{
       
        const resultado = await connection.raw(
            ` select * from Competicao_criar;`
            ) 
            res.status(201).send({resultado: resultado[0]})

        }catch(error : any){
        res.status(500).send(error.sqlmessage|| error.message)
    }

}