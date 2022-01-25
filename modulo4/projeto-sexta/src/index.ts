//  ------Exercícios-1-----

// let nome:string|undefined = process.argv[2] 
// let idade:string|undefined = (process.argv[3])

// // let dia = idade.substring(idade.length -10, 2 )

// let dia = (idade.slice(-10, -8))
// let mes = (idade.slice(-7, -5))
// let ano = (idade.slice(-4))

//  console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)


//  ------Exercícios-2-----


// let paramentro = process.argv[2]
// console.log(typeof paramentro)


//  ------Exercícios-3-----

// const movies = process.argv[2]
// const year = process.argv[3]
// const GENDER = process.argv[4]



// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }


// type filmes = {
//     nome: string,
//     lancamento: number,
//     genero: GENERO,
//     pontuacao: number
// }

// type usuario = filmes  {
    
// }

// const arr: arr = []
// console.log(`nome: ${movies}, anoLancamento: ${year}, genero: ${GENERO gender}`)


//  ------Exercícios-4-----


// Considerando o arrayacima, crie um ENUM para os setores
//  e um type para as pessoas colaboradoras. Em seguida, 
//  crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas 
// do setor de marketing que trabalham presencialmente.

type trabalho = 
[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

function buscarSeotr () {
    if(se)
}