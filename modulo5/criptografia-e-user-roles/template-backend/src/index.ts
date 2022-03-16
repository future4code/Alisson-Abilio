import app from "./app";
import { buscarPorEmail, createUser } from "../src/endpoints/createUser"
import { hash } from "bcryptjs";
import { Hash } from "./services/Hash";

app.post("/user/signup", createUser)
app.get("/user/buscar/:id", buscarPorEmail)


//  const cypherText = new Hash().createrHash("cebola")


//  console.log(cypherText)


const comparacao = new Hash().compareHash(
    "$2a$12$/KHm1j/9ywlPpro6Sz3k9evpVuiTbsAefVeOeZMwdBIDD0oU/xnOa",
    "cebola"
    )
console.log(comparacao)

// "$2a$12$Sjb2Hexi5mzkApdKEEviFeL9fLFuA.V6KZshrtNkMFCFj7z3QvOh"
// "$2a$12$fmN2v/Zq0.x3pvD.l.KtlejcggBvoyRXW9ciawLFxDFQIdIbKyYJS"