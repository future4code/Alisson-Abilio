import { compare, compareSync, genSaltSync, hashSync } from "bcryptjs"
import  dotenv from "dotenv"

dotenv.config()

export class Hash {

    createrHash = (
        plainText: string
    ): string => {
        const rounds: number =  Number (process.env.COST)
        const salt: string = genSaltSync(rounds)
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    }

    
    compareHash = (
        plainText: string,
        hash: string
        
        ):boolean => {
            compareSync(plainText, hash)
            return true
        }
    }