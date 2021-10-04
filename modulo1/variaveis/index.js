//----------EXERCICIOS DE INTERPRETAÇÃO DE CODIGO---------------

// 1-Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

//RESPOSTA: 
//NO PRIMEIRO CONSOLE.LOG VAI IMPRIMIR 10
//NO SEGUNDO VAI IMPRIMIR 10, 5

//--------------------------------------


// 2- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

//RESPOSTA: 

//VAI SER IMPRESSO OS VALORES 10,10,10.


//-----------------------------------------


// 3- Analise o programa abaixo, entenda o que ele faz e sugira melhores
//nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, 
//usar o padrão camelCase. Alem disso,
// os nomes não podem começar com números ou caracteres especiais.

// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

//RESPOSTA: 

// let p  poder ser substituida por HorasTrabalhadasPorDia
// let t  poder ser ssbstituida por ValorDaDiaria


//----------------EXERCICIOS DE ESCRITA DE CODIGO----------------


// 1- Construa um programa, seguindo os seguintes passos:

//a. Declare uma variável para armazenar um nome, sem atribuir um valor.

let nome

// b.Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idade

// c.Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

console.log(typeof nome, typeof idade)

// d. Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//RESPOSTA: SÃO O PADRÃO DE STRING O PADRA DE LETRAS

// e. Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às
// variáveis que acabou de criar.

nome = prompt("QUAL O SEU NOME?" )
idade = prompt("QUAL A SUA IDADE?")

console.log(`olha meu nome é `, nome, `tenho`, idade,`anos de idade.`)