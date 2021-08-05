const pontoRegex = /./;

console.log('.');
console.log(pontoRegex.test("asd"));// true
console.log(pontoRegex.test(" "));// true
console.log(pontoRegex.test("123"));// true
console.log(pontoRegex.test("123sad"));// true

const dRegex = /\d/; // [0-9]

console.log('d');
console.log(dRegex.test("asd"));// false
console.log(dRegex.test(" "));// false
console.log(dRegex.test("123"));// true
console.log(dRegex.test("123sad"));// true

const dRegex2 = /\D/; // [^0-9]

console.log('D');
console.log(dRegex2.test("asd"));// true
console.log(dRegex2.test(" "));// true
console.log(dRegex2.test("123"));// false
console.log(dRegex2.test("123sad"));// true

const sRegex = /\s/;

console.log('s');
console.log(sRegex.test("asd"));// false
console.log(sRegex.test(" "));// true
console.log(sRegex.test("123"));// false
console.log(sRegex.test("123sad"));// false

const wRegex = /\w/;

console.log('w');
console.log(wRegex.test("asd"));// true
console.log(wRegex.test(" "));// false
console.log(wRegex.test("123"));// true
console.log(wRegex.test("123sad"));// true
