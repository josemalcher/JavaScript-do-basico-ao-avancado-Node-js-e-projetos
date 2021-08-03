let pessoa = {
    "nome": "Malcher",
    "idade": 36,
    "profissao": "Programador",
    "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
console.log(pessoaTexto.nome); // undefined

/*
{   "nome":"Malcher",
    "idade":36,
    "profissao":"Programador",
    "hobbies":["Video game","Leitura","Correr"]}
*/

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
/*
{
    nome: 'Malcher',
    idade: 36,
    profissao: 'Programador',
    hobbies: [ 'Video game', 'Leitura', 'Correr' ]
}
*/

console.log(pessoaJSON.hobbies[0]);
//Video game
