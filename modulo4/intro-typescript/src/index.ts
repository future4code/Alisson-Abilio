

// function checkTriangulum(a:Number, b:Number, c:Number,) {
//     if (a !== b && b !== c) {
//       return console.log("Esculent");
//     } else if (a === b && b === c) {
//       return console.log("Equilateral");
//     } else {
//       return console.log("Isosceles");
//     }
//   }

//  checkTriangulum(4, 5, 7)
 

function imprimisTresCoresFavorites(res:string, res1:string, res2:string) {
  const cor1 =(prompt("Insira sua primeira cor favorita"))
  const cor2 = (prompt("Insira sua segunda cor favorita"))
  const cor3 = (prompt("Insira sua terceira cor favorita"))
  console.log([cor1, cor2, cor3])
}
imprimisTresCoresFavorites()