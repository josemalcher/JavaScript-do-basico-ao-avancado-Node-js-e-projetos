const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));// true
console.log(validaMarca.test("Marca: asd"));// false
console.log(validaMarca.test("Marca: "));// false
console.log(validaMarca.test("Nike"));// false
console.log(validaMarca.test("123132"));// false
console.log(validaMarca.test("Marca: Puma")); // true
