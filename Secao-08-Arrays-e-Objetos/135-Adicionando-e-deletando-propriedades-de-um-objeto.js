let pessoa = {
    nome: "Malcher jr",
    idade: 36,
    profissao: "programador"
}
console.log(pessoa);// { nome: 'Malcher jr', idade: 36, profissao: 'programador' }
delete pessoa.nome;
console.log(pessoa);// { idade: 36, profissao: 'programador' }
pessoa.casada = false;
console.log(pessoa); // { idade: 36, profissao: 'programador', casada: false }
