// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


//a) O que vai ser impresso no console? 

// VAI SER IMPESSO O NOME O APELIDO E A ARRAY O NOME, APELIDO, ARRAY



// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// NÃO VAI SER IMPRESSO O DADOS DA CHIJO


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


//  const novaAray = pets.map((pet) => {
//   return pet.nome })
//  console.log(novaAray)



const arraySalsicha = (nome ) => {

    return nome === "salsicha"
    
}

const petSalsicha = pets.filter(arraySalsicha)
 
console.log(petSalsicha)

 


 

