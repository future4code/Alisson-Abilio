import express, { Express, Request, Response } from "express";
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
});




app.get("/usersAll", async (req:Request, res:Response) =>{
    try{
        const result = await connection.raw
        (`select * from labecommerce_users;`)
        res.status(200).send({result: result[0]})
    }catch(error:any ){
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.post("/users", async(req:Request, res:Response)=>{
    try{
        const result = await connection.raw
        (`insert into labecommerce_users value (
            "${req.body.id}",
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.password}",
            "${req.body.adm}"  
        ); `)
        res.status(200).send({result})
    }
    catch(error: any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})