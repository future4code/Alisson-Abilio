import { AddressInfo } from "net";
import express, { Express } from 'express'
import cors from 'cors'

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

///-----------------------------///------------------///--------------

//EXERCICIO I 

// a) Para que serve o construtor dentro de uma classee como fazemos para
//    chamá-lo?
//   Resposta: Construtor serve para inicializar variáveis, para criar uma
//             instância, usa-se a keyword new


//b) Copie o código abaixo para o seu exercício de hoje; 
//   crie uma instância dessa classe (dê o nome, cpf e idade que você
//   quiser). Quantas vezes a mensagem "Chamando o construtor da classe
//   User" foi impressa no terminal?

//  Resposta:Fiz a Instâcia e Não foi impressa nenhuma vez a menssagen.

//c) Como conseguimos ter acesso às propriedades privadas de uma classe?
// Resposta: 


//EXERCÍCIO II

//Transforme a variável de tipo abaixo, 
//chamada Transaction em uma classe Transaction. Ela deve conter
//as mesmas propriedades: data,valor e descrição. Agora, porém,
//todas elas devem ser privadas. Portanto, crie métodos (getters)
//para a leitura desses valores, tanto para essa classe quanto
//para a classe UserAccount. Crie uma instância dessa classe
//e adicione à instância já criada de UserAccount 




class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string,name: string, age: number) 
    { this.cpf = cpf;   this.name = name;  this.age = age}


    insertTransaction(transactions: Transaction) 
    { this.transactions.push(transactions)}

}

const conta = new UserAccount(
    "333.333.888-99",
    "Alisson",
    50
)
const conta1 = new UserAccount(
    "888.222.444-11",
    "Marilia",
    300
)
const conta2 = new UserAccount(
    "355.303.448-00",
    "Aline",
    58
)
class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
    
    public getDate() {
        return this.description
    }
    public getValue() {
        return this.description
    }
    public getDescription() {
        return this.description
    }
}

const transactions1 = new Transaction("10/02/2022", 5000, "salário")
const transactions2 = new Transaction("22/02/2022", 1000, "extra")
const transactions3 = new Transaction("15/02/2022", 2000, "adicional")

conta.insertTransaction(transactions1)
conta.insertTransaction(transactions2)
conta.insertTransaction(transactions3)

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  }
  const userAccount = [conta, conta1, conta2]
  const caixa = new Bank(userAccount)

  console.log("aqui aconta",caixa)