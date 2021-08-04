function criaCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log('Auau');
    };
    return cachorro;
}

let doberman = criaCachorro('doberman', 4, 'preta');
console.log(doberman);
doberman.latir();
/*
{
    raca: 'doberman',
        patas: 4,
    cor: 'preta',
    latir: [Function (anonymous)]
}
Auau
*/
