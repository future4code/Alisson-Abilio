import { Request, Response } from "express";
import { getAddressInfo } from "../services/getAddressInfo";

export const getAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.body.cep

        const address = await getAddressInfo(cep)
        if (!address) {
            throw new Error("deu ruin ")
        }

        res.send(address)

    }
    catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        }else{
            res.send({message: "erro inesperado"})
        }

    };

}