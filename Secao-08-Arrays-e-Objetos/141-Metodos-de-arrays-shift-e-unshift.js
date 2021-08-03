let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro); // BMW
console.log(carros); // [ 'Audi', 'VW', 'Fiat' ]

carros.unshift('Gurgel');

console.log(carros); // [ 'Gurgel', 'Audi', 'VW', 'Fiat' ]
console.log(carros[0]); // Gurgel
