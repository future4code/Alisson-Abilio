import express, { Express, request, Request, response, Response } from "express";
import { connection } from "./Data/connection";
import cors from "cors";
import { AddressInfo } from "net";
import { user } from "./Types/type";

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
})




//EXERCÍCOS DA SEXTA FEIRA

//GET

app.get("/accounts", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw
            (`select * from labecommerce_accounts`)
        res.status(201).send({result: result[0]})
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
app.get("/users", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw
            (`select * from labecommerce_users;`)
        res.status(200).send({ result: result[0] })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
app.get("/products", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw
            (`select * from  labecommerce_products`)

        res.status(201).send({ result: result[0] })
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
app.get("/users/:user_id/purchases", async (req: Request, res: Response)=>{
    try{ await(``)

    }
    catch(error:any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//POST

app.post("/users", async (req: Request, res: Response) => {
    try {
        const id = Date.now().toString()
        const result = await connection.raw
            (`insert into labecommerce_users value (
            "${id}",
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.password}",
            "${req.body.adm}"  
        ); `)
        res.status(200).send({ result })
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
app.post("/products", async (req: Request, res: Response) => {
    try {
        const id = Date.now().toString()
        const result = await connection.raw
            (`insert into labecommerce_products value(
            "${id}",
            "${req.body.name}",
            "${req.body.price}",
            "${req.body.image_url}"
        )` )
        res.status(201).send(result)
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
app.post("/creatAccounts", async (req: Request, res:Response)=>{
    try{
        const id = Date.now().toString()
        const result = await connection.raw
        (`insert  into labecommerce_accounts value (
        
           ${id},
           "${req.body.balance}",
           "${req.body.user_id}"
        )
        
        `)
        res.status(201).send(result)
    }
    catch(error: any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})