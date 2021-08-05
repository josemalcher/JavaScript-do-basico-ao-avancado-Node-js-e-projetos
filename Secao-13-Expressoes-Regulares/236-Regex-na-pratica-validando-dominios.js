const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));// true
console.log(validaDominio.test("www.horadecodar.com.br"));// true
console.log(validaDominio.test("www.horadecodar"));// false
console.log(validaDominio.test("horadecodar.com.br"));// true
