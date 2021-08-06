function* criadorId() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());
/*
0
1
2
3
4
5
6
{ value: 7, done: false }
*/
