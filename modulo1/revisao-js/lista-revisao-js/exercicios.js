// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
 

   return array.length
}

retornaTamanhoArray()
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}


retornaArrayInvertido()
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(comparaNumeros)
}
function comparaNumeros (a,b) {
    if (a === b) return 0
    if (a  <  b) return -1
    if (a  >  b) return 1
    }


retornaArrayOrdenado(comparaNumeros)



// EXERCÍCIO 04
function retornaNumerosPares(array) {
 const numerosPares = array.filter((numeros) => {

  return numeros % 2 == 0

  
 }
  
 )

 return numerosPares
}
   
retornaNumerosPares()

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

  const elevar = array.map((elem) => {
    return elem * elem  
  })

  const numerosPares = array.filter((numeros) => {
  
   return numeros % 2 === 0 
  
   
  })
 
  return numerosPares()
}
retornaNumerosParesElevadosADois()

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}