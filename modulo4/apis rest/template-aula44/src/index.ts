import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users } from './dados'


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
app.get("/usuario/:type", (req: Request, res: Request) => {
  let codeError:number=400

  try{
    const user:string = req.query.type as string
    const result: User | undefined = users.find((item) => item.type === user)
    if(!result){
      codeError =404
      throw new Error('User not fond')
    }
    res.status(200).send(result)

  }catch(error){
    res.status(codeError).send({message: error.messge})
  }
  
  
  
})