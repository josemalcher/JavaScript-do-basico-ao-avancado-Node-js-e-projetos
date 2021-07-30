function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));
// 24

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de multa é " + mult);
// O valor de multa é 160

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(19,true));// Pode dirigir
console.log(podeDirigir(25,true));// Pode dirigir
console.log(podeDirigir(44,0)); // Não pode dirigir
console.log(podeDirigir(19,1)); // Pode dirigir
console.log(podeDirigir(17,false));// Não pode dirigir

