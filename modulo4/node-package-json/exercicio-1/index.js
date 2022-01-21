// Responda como comentário no seu código:
//  como fazemos para acessar os parâmetros 
//  passados na linha de comando para o Node?

// RESPOSTA: EU ENTENDI QUE USAMOS O TERMINAL COM ESTA FINALITADE.

const primeiroNumero = Number(process.argv[2])
const segundoNumero = Number(process.argv[3])

const some = primeiroNumero * segundoNumero

console.log(some)

// Crie um programa que receba seu nome e sua idade. Após receber estes valores,
//  imprima no console uma mensagem que siga a seguinte estrutura:

// Altere o programa acima para que mostre também a sua idade daqui a sete anos.

//  "Olá, (Nome)! Você tem (sua idade) anos."

const nome = process.argv[4]
const idade = Number(process.argv[5])
const novaIdade = idade + 7

console.log(`Olá, ${nome}! Você tem  ${idade}  anos.`)
console.log(`Olá,${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)