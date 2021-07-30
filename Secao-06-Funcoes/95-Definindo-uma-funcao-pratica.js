function imprimirNoConsole() {
    console.log("Olá mundo!");
}

imprimirNoConsole(); // Olá mundo!

function imprimirUmNumero(num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);
/*
O número é: 2
O número é: 4
O número é: 6
O número é: 8
*/

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio(); // 0.3063439510848809
numeroAleatorio(); // 0.5596334748072507
