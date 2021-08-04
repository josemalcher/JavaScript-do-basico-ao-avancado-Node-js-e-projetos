const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
// [Object: null prototype] {}
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
// true
console.log(pessoa.hasOwnProperty('maos'));
// true
