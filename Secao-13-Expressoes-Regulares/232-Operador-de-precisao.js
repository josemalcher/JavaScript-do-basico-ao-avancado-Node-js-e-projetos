const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500"));// true
console.log(cep.test("asd"));// false
console.log(cep.test("881-50"));// false
console.log(cep.test("99999-999"));// true

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(48)9999-9999"));// true
console.log(tel.test("(48)55555-4444"));// true
