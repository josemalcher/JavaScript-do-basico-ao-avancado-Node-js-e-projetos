const frase = "O número 100 está aqui".match(/\d+/);
const frase2 = "O número está aqui".match(/\d+/);

console.log(frase);
// [ '100', index: 9, input: 'O número 100 está aqui', groups: undefined ]

console.log(frase2);
// null
