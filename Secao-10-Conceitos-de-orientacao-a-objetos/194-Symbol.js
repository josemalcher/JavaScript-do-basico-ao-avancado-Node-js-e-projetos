class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.raca = 'SRD';
let patas = Symbol();
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

labrador.latir();// Au au

console.log(Cachorro.prototype.raca);// SDR
console.log(labrador.raca);// Labrador

// acessando symbol
console.log(Cachorro.prototype[patas]);// 4

console.log(labrador[patas]);// 4
