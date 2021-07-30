function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log('Essa Função precisa ter dois argumentos');
    }else{
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,10));

/*
Essa Função precisa ter dois argumentos
undefined
11

*/

function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log('Olá ' + nome);
    }else{
        console.log('Olá ' + nome + ' voce tem ' + idade + ' anos');
    }
}

saudacao('Malcher');
saudacao('Malcher', 36);
/*
Olá Malcher
Olá Malcher voce tem 36 anos
*/
