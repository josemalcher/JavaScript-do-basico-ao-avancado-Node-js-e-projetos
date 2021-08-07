let novoElemento = document.createElement('p');
let texto = document.createTextNode('Texto do ELemento Criado');

novoElemento.appendChild(texto);

let elementoAlgo = document.querySelector('#titulo-principal')
let elementoPai  = document.querySelector('#container-principal')

elementoPai.insertBefore(novoElemento, elementoAlgo);
