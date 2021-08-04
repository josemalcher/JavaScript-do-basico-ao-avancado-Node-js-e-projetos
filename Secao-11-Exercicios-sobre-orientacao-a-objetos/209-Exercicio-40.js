class Conta {
    constructor(saldoCC, saldoCP, juros) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }

    deposito(valor) {
        this.saldoCC += valor;
    }

    saque(valor) {
        this.saldoCC -= valor;
    }

    transferenciaCP(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    transferenciaCC(valor) {
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosDeAniversario() {
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }

}

class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros) {
        super(saldoCC, saldoCP, juros*2)
    }
}

let conta = new Conta(1000, 5000, 1);

console.log(conta);
// Conta { saldoCC: 1000, saldoCP: 5000, juros: 1 }

conta.saque(500);
console.log(conta);
// Conta { saldoCC: 500, saldoCP: 5000, juros: 1 }

conta.deposito(5000);
console.log(conta);
// Conta { saldoCC: 5500, saldoCP: 5000, juros: 1 }

conta.transferenciaCP(3000);
console.log(conta);
// Conta { saldoCC: 2500, saldoCP: 8000, juros: 1 }

conta.jurosDeAniversario();
console.log(conta);
// Conta { saldoCC: 2500, saldoCP: 8080, juros: 1 }

let conta2 = new ContaEspecial(10000, 50000, 1);
console.log(conta2);
// ContaEspecial { saldoCC: 10000, saldoCP: 50000, juros: 2 }

conta2.saque(5000);
console.log(conta2);
// ContaEspecial { saldoCC: 5000, saldoCP: 50000, juros: 2 }

conta2.jurosDeAniversario();
console.log(conta2);
// ContaEspecial { saldoCC: 5000, saldoCP: 51000, juros: 2 }
