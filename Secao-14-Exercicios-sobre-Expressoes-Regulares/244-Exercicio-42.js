const validarId = /\d+ID\b/;

console.log(validarId.test("384284ID"));// true
console.log(validarId.test("384284"));// false
console.log(validarId.test("asd"));// false
console.log(validarId.test("asdasdID"));// false
console.log(validarId.test("ID"));// false
console.log(validarId.test("555ID"));// true
