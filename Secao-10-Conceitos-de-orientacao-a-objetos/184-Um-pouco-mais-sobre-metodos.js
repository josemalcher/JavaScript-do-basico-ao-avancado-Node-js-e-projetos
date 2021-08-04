const cachorro = {
    raca: 'SDR',
    uivar: function () {
        console.log("Auuuuu");
    },
    rosnar: function () {
        console.log("grrrrrrr");
    },
    setRaca: function (raca) {
        this.raca = raca;
    },
    getRaca: function () {
        return "A Raça é " + this.raca;
    }
}
cachorro.uivar();// Auuuuu
cachorro.rosnar();// grrrrrrr

cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca); // Pastor Alemão
console.log(cachorro.getRaca());// A Raça é Pastor Alemão

