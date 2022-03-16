
import express from "express";
import { paula} from "./User";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003, () => console.log("é a porta  3003"))
  

  app.get("/users", (req, res) =>{
  
      res.status(200).send(paula)
    
      
  })
