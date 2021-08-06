function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log(`O numero é ${num}`));
        }else{
            reject(new Error('falhou... numeor errado'));
        }
    });
}

verificarNumero(2)
verificarNumero(3)

/*
O numero é 2
(node:9712) UnhandledPromiseRejectionWarning: Error: falhou... numeor errado
*/
