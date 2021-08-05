const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarDataNasc.test('05/02/2000'));// false
console.log(validarDataNasc.test('5/2/2000'));// false
console.log(validarDataNasc.test('05-02-2000'));// false
console.log(validarDataNasc.test('05/02/00'));// false
console.log(validarDataNasc.test('12/12/1999'));// true
console.log(validarDataNasc.test('99/99/9999'));// false
console.log(validarDataNasc.test('31/00/2010'));// true
