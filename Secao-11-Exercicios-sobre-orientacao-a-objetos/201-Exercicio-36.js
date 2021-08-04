class Conta{
    constructor(saldo) {
        this.saldo = saldo;
    }
    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor + (valor * 0.05);
    }
}
let conta = new Conta(1000);

conta.deposito(1000);

console.log(conta.saldo);// 2000

conta.saque(500);

console.log(conta.saldo);// 1475
