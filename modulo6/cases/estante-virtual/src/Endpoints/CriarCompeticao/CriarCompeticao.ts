import {  Request, Response } from "express";
import { ConnectionData } from "../../Data/ConnectionData";


export class CriarNovamente extends ConnectionData {

  public  async CriarCompeticao  (id:string, competicao: string, atleta:string, valor:number, unidade:string ):Promise<any>{
        
        try{
            const resultado = await this.getConnection().raw(
                `insert into Competicao_criar values (
                "${id}",
               " ${competicao}",
               " ${atleta}",
                 ${valor},
                "${unidade}"
                )`
            ) 

        }catch(error : any){
           console.log(error)
        }
        
    }
    
    
//    PegarCompetidores =async(req:Request, res:Response) =>{
//     const {unidade}  = req.params
//     try{
//         const resultado = await this.getConnection().raw(
            
//             `SELECT  atleta, valor 
//             FROM   Competicao_criar
//             WHERE unidade = ${unidade}
//             ORDER BY valor ASC;
//              `
//             ) 
            
//             res.status(201).send({resultado: resultado[0]})
            
//         }catch(error : any){
//             res.status(500).send(error.sqlmessage|| error.message)
//     }

}
