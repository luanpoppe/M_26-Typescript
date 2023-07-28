class Pessoa {
    nome: string
    renda?: number

    constructor(nome: string, renda?: number) {
        this.nome = nome
        this.renda = renda
    }

    dizOla(): string {
        return `${this.nome} disse oi`
    }
}

class ContaBancaria {
    protected saldo: number = 0
    numeroConta: number

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta
    }

    getSaldo() {
        return this.saldo
    }

    depositar(valor: number) {
        this.saldo += valor
    }

    static retornaNumeroDoBanco() {
        return 125
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)

ContaBancaria.retornaNumeroDoBanco()