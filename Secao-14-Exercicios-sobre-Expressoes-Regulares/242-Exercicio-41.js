const validarMaiuscula = /[A-Z]/;

console.log(validarMaiuscula.test("testando"));// false
console.log(validarMaiuscula.test("123"));// false
console.log(validarMaiuscula.test("TESTANDO"));// true
