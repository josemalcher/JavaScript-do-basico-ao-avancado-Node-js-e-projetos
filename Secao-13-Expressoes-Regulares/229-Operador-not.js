const notab = /[^ab]/;

console.log(notab.test("a"));// false
console.log(notab.test("Aqui tem a"));// true

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as"));// true
console.log(nottoaz.test("asdasfdfsfeeqweqeqwes"));// false

const az = /[a-z]/;

console.log(nottoaz.test("asd123asdad"));// true
