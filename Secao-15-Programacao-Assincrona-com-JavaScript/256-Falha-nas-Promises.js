let p = Promise.resolve(new Error('Não deu certo'));

console.log('okokko');

p.then(valur => {
    console.log(valur)
}).catch(reason => {
    console.log('falhou ' + reason);
})
/*
okokko
Error: Não deu certo
*/
