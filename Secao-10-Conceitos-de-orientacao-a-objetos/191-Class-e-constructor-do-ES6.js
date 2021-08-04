class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'Amarelo');

console.log(labrador);
// Cachorro { raca: 'Labrador', patas: 4, cor: 'Amarelo' }
