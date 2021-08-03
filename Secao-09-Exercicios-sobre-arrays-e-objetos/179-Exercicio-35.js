const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
}

console.log(calculadora.soma(3,4)); // 7
console.log(calculadora.subtrair(5,5)); // 0
console.log(calculadora.multiplicar(8,2)); // 16
console.log(calculadora.dividir(5,2));// 2.5
