const reg = /\w+: (Matheus|João|Maria)/; // Nome: nadsuasudi

console.log(reg.test("Nome: Matheus")); // true
console.log(reg.test("Nome: José")); // false
console.log(reg.test("Nome: Maria")); // true
