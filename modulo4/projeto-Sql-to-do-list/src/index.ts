import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection';

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




app.post("/user", async (req: Request, res: Response): Promise <void> => {
    try {
          await connection.raw
         (`INSERT INtO CREATE_USER
        ( name, nickname, email) 
         values 
         (
        "${req.body.name}",
        "${req.body.nickname}",
        "${req.body.email}"
         )
         `)
        res.status( 201).send("tudo certo!!!!!")
    }
    catch (error: any) { res.status(500).send(error.Sqlmessage || error.message) }
})
app.get("/user/:id", async (req: Request, res: Response): Promise <void> => {
  
    try{
       const seeAll =  await connection.raw
        (` select name, id from CREATE_USER where ${req.params.id}`)

        res.status(201).send({result: seeAll[0][0]})
        
    }catch (error: any)
    { res.status(500).send(error.Sqlmessage || error.message) }

})
app.put("/user/edit/:id", async (req: Request, res: Response): Promise <void> => {
  
    try {
        await connection.raw
       (`update CREATE_USER set 
       name ="${req.body.name}",
       nickname ="${req.body.nickname}",
       email = "${req.body.email}"
       where  id = ${req.params.id};
       `)
      res.status( 201).send("tudo certo!!!!!")
  }catch (error: any)
    { res.status(500).send(error.Sqlmessage || error.message) }

})

app.post("/task", async (req: Request, res: Response): Promise <void> => {
    try {
          await connection.raw
         (`INSERT INtO CREATE_TASKS
        (  title, description, limitDate, status, creatorUserId )
         values 
         (
        "${req.body.title}",
        "${req.body.description}",
        "${req.body.limitDate}",
        "${req.body.status}",
        "${req.body.creatorUserId}"
         )
         `)
        res.status( 201).send("tudo certo!!!!!")
    }
    catch (error: any) { res.status(500).send(error.Sqlmessage || error.message) }
})

app.get("/task/:id", async (req: Request, res: Response): Promise <void> => {
  
    try{
       const seeAll =  await connection.raw
        (` select * from CREATE_TASKS where id =  ${req.params.id}`)

        res.status(201).send(seeAll[0])
        
    }catch (error: any)
    { res.status(500).send(error.Sqlmessage || error.message) }

})