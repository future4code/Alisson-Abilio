import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export function gerar(): string {
  return jwt.sign(
    {
      id: "alisson"
    },

    "senhaSegura",

    { expiresIn: "1h" }
  );
}

export function verificar(token:string) {
  return jwt.verify(
  token,

  "senhaSegura"

)
  }