let novoElemento = document.createElement('p');
let texto = document.createTextNode('Texto do ELemento Novo adicionado');

novoElemento.appendChild(texto);

let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);
