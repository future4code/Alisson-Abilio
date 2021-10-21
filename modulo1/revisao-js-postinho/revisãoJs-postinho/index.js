
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------



// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));






// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return`São iguais ${a === b}`
}

console.log(checarIgualdade(2,2))





// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior (a, b) {

     
    if(a > b){
        return `O número maior é ${a}` 
    }
    if(b > a){
        return `O número maior é ${b}`
    }
    
}

console.log(verificaSeEMaior(321, 2156));



// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= flase
// b-) 1=='1'= true
// c-) 'a'==='b'= true
// d-) 'b'>'a'= false
// e-) 0!==null= false 


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------


const cadastro = () => {

    const usuarios = []
    
    const usuario = {
        nome: "alisson",
        idade: 20,
        senha: "123456",
        nascionalidade: "brasileira"

}

if( usuario.idade > 18 && usuario.senha.length >= 6 && usuario.nascionalidade === "brasileira")
{
    usuarios.push(usuario)
}

return usuarios

}
console.log(cadastro());


// NÃO SEI COMO DEIXAR A SENHA DA FORMA CERTA.


// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    if( login === "labenu"){
        console.log("Usuário logado")
    }
    if (login !== "labenu"){
        console.log("Senha inválida")
    }
}

console.log(login());




// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    let tempo, data = new Date()
    
    //  Sua lógica aqui
   // Coronavac = 28 dias
   //Astrazenica = 90 dias
    const nome = "Alisson"
    const vacina = "pfizer"

    if(vacina.toLocaleLowerCase() === "coronavac"){
        tempo = 28 
    }
    else if(vacina.toLocaleLowerCase()=== "astrazenic"){
        tempo = 60
    }
    else if(vacina.toLocaleLowerCase()=== "pfizer"){
        tempo = 90
    }
    

    const milissegundos1dia = 86400000

    const hoje =data.getTime()

    const dataAtualizada = new Date(hoje + (tempo*milissegundos1dia))

    const dataFormatada = dataAtualizada.toLocaleDateString("pt-br")


  return `Olá ${nome}! A próxima dose da ${vacina} é daqui a 
    ${tempo} dias. Compareça no posto na data ${data}.`
}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    if(usuarios.nome === "Barbara") {
        

    }

 return usuarios
}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoses = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());