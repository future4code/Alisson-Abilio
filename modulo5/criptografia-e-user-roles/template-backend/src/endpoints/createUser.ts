import { Request, Response } from "express";
import { connection } from "../connection";
import { gerar } from "../services/Authenticator";
import { Hash } from "../services/Hash";
import { IdGenerator } from "../services/IdGenerator";

const userTableName = "User";


export const createUser = async (req: Request, res: Response) => {
  let errorCode = 500
  try{
    const { email, password} = req.body

    if(!password  ){
      throw new Error ( "Preencha o campos 'password'.")
    }
    
    if(!email ){
      throw new Error ("Preencha o campos 'name'.")
    }
    
    const esconderSenha:string = new Hash().createrHash(password)

    const usuario = {

      id: IdGenerator() ,
      email: email,
      password: esconderSenha
    }
    await connection("User")
    .insert(usuario)
    const token = gerar()
    
    res.status(201).send({usuario,token})

  }
  catch(error: any){
    res.status(500).send(error.slqmessage || error.message)
  }
  
}


export const buscarPorEmail = async(email: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from("User")
    .where({ email });

  return result[0];
 }
