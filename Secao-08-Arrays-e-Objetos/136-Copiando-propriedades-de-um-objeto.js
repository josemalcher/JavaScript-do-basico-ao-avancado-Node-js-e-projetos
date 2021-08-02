let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

console.log(carro);// { portas: 2, portamalas: '200l', motor: '2.0' }

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

Object.assign(carro, adicionais);

console.log(carro);

/*
{
  portas: 2,
  portamalas: '200l',
  motor: '2.0',
  tetosolar: true,
  arcondicionado: true
}

*/
