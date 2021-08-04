class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }

}


let pastor = new Cachorro('Pastor Alemão', 'Sem Cor');

console.log(pastor);
// Cachorro { raca: 'Pastor Alemão', cor: 'Sem Cor' }

pastor.setCor = 'Marrom';

console.log(pastor.getCor);// Marrom
