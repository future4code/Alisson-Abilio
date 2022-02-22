import app from "./app";
import { buscarPorEmail, createUser }  from "../src/endpoints/createUser"

app.post("/user/signup", createUser)
app.get("/user/buscar/:id", buscarPorEmail)