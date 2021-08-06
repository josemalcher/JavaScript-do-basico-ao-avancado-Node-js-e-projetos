async function somar(a, b) {
    return a + b;
}

console.log(somar(5, 10));// Promise { 15 }


somar(10,20).then(value => {
    console.log(value);
})
//30
