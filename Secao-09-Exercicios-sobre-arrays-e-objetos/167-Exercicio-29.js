let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
};

console.log(onibus.rodas);// 8
delete onibus.rodas;
console.log(onibus.rodas);// undefined

onibus.janelas = 20;

console.log(onibus);
// { limitePassageiros: 40, portas: 2, janelas: 20 }
console.log(onibus.janelas);
// 20
