// 1- O que o código abaixo está fazendo?
// Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
//   }
//   console.log(valor)

//RESPOSTA: EM PRIMEIRO LUGAR FOI CRIADO 
//UMA CONSTANTE LET "VALOR" QUE ERA IGUAL
// A 0.

//FOI CRIADO UM LAÇO COM ONDE A CONSTANTE I "INDEX"
//COMEÇA A CONTAR DA PRIMEIRA NO CASO O INDEX 0.

//DEPOIS INDICA QUE ENQUANTO I FOR MENOR QUE 5  
//VAI SER ADICIONADO MAIS UM ÍNDICE.

//O VALOR IMPRSSO VAI SER 10 = 1+2+3+4


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// b) Se eu quisesse acessar o índice de 
// cada elemento dessa lista, o for...of...
// é suficiente? Se sim, 
// o que poderia ser usado para fazer isso?

// RESPOSTA: VAI SER IMPRESSO O VALORES MAIORES QUE 18 

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//RESPOSTA: VAI IMPRIMIR 4 "*"


//EXERCICIOS:

// let quantidadeDeBichinhos = Number(prompt("quantos bichinhos vc tem?"))

// let quantidadeDeBichosEmCasa = 0 

// let bicho

// let bichos = []

// if (quantidadeDeBichinhos === quantidadeDeBichosEmCasa)
// {console.log("que pena, adota um pet!")}

// for ( bicho = 0; bicho < quantidadeDeBichinhos; bicho++) 
// {
    
//     bichos = prompt("qual o nome?")
// console.log(bichos)

// }

// const array = [80, 30, 40, 60]

// let quanti = array.length 


// //console.log(quanti)

// for (let i = 0; i < quanti; i++ ){

 
//  let mostrar = array[i] 

//     console.log(mostrar)

    
// }
    
// for (let i = 0; i < quanti; i++ ){

 
   
       
   
//        console.log(mostrar / 10)
//    }
         

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


let quantidade = array.length

for(let i = 0; i < quantidade; i++ )
{

imprimir = array [i] 

console.log(imprimir )
}


