let cachorro = {
    patas: 4,
    raca: 'SDR',
    latir: function (){
        console.log('au au');
    }
}
let labrador = Object.create(cachorro);
labrador.latir();// au au

labrador.raca = "labrador";

console.log(labrador.raca);// labrador
console.log(cachorro.raca);// SDR

let pastor = Object.create(cachorro);
pastor.raca = 'Pastor Alemão';
console.log(pastor.raca);// Pastor Alemão
