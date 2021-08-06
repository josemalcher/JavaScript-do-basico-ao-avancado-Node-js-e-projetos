let p = Promise.resolve(5);

console.log(p); // Promise { 5 }


p.then(value => value + 5)
    .then(value => {
        console.log(value)
    });

// 10
