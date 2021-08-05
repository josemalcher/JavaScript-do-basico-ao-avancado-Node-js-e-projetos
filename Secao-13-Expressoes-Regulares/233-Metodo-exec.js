const digitos = /\d+/;

console.log(digitos.exec("Tem o número 100 aqui"));
// [ '100', index: 13, input: 'Tem o número 100 aqui', groups: undefined ]

console.log(digitos.exec("Tem o número aqui"));
// null
