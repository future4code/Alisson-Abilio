import express, { Request, Response } from 'express'
import cors from 'cors'
import { User1, users } from './dados'


const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})
app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
app.get("/usuarios", (rep: Request, res: Response) => {
  try {
    res.status(200).send(users)
  }
  catch (error) {
  }
}
)
app.get("/usuario/:id", (req: Request, res: Response) => {
  let errorCode: any = 400
  try {
 
    const result  = users.map((item) =>  item.id === Number(req.query.id))


    res.status(200).send({result});
  } catch (error) {

    console.log(error);
    res.status(errorCode).send("erro");
  }
})