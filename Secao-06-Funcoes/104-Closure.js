function lembrarSoma(x) {
    return function (y) {
        return x + y;
    };
}

let soma1 = lembrarSoma(2);
console.log(soma1(10)); // 12

let soma2 = lembrarSoma(100);
console.log(soma2(50)); // 150

function contador(i) {
    let cont = i;
    let somaContador = function () {
        console.log(cont);
        cont++;
    };
    return somaContador;
}

let meuContador = contador(10);
meuContador();
meuContador();
meuContador();
meuContador();
/*
    10
    11
    12
    13
*/



