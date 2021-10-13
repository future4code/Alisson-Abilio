// Explique o que o código faz. Qual o teste que ele realiza? 

// RESPOSTA: E PARA DESCOBRIR SE O NUMERO TEM RESTO 0 OU 1 
// COM O RESTO 0 PASSOU NO TESTE
// COM O RESTO 1 NÃO PASSOU NO TESTE 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)