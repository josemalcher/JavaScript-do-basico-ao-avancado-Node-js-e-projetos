const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("matheus@gmail.com"));// true
console.log(validarEmail.test("matheus@gmail"));// false
console.log(validarEmail.test("gmail.com"));// false
console.log(validarEmail.test("matheus@gmail.com.br"));// true
console.log(validarEmail.test("gmail@gmail.gmail.gmail"));// true
