// desafio conta bancaria
/*4. Cliente Pessoa Fisica ou Juridica
    fisica com cpf e juridica com cnpj
*/

class Transferir{
    static execute(contaOrigem, contaDestino, valor){
        if(!contaOrigem instanceof ContaBancaria || !contaDestino instanceof ContaBancaria){
            throw new Error("Contas precisam herdar de ContaBancaria")
        }
 
        try {
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)
            
        } catch (e) {
            console.log("deu ruim", e.message) 
        }
    }
}


class Cliente{
    constructor(nome, documento, tipoDocumnento){
        if(this.constructor === Cliente){
            throw new Error("Cliente é uma classe abstrata")
        }
        this.nome = nome
        this.documento = documento
        this.tipoDocumnento = tipoDocumnento
    }
}


class PessoaFisica extends Cliente{
    constructor(nome, documento){
        super(nome, documento, "CPF")
        
    }
}

class PessoaJuridica extends Cliente{
    constructor(nome, documento){
        super(nome, documento, "CNPJ")
        
    }
}

const cliente1 = new PessoaFisica("Fabio", "123.732.144.54")
const cliente2 = new PessoaJuridica("FabioSenaApp", "12.732.144/0001-06")

console.log(cliente1)
console.log(cliente2)

class ContaBancaria {
    constructor(cliente, numero){

        if(this.constructor === ContaBancaria){
            throw new Error("Conta Bancaria é uma classe abstrata")
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }
    get dadosCliente(){
        return `${this.cliente.nome}, ${this.cliente.tipoDocumnento} ${this.cliente.documento}`
    }


    depositar(valor){
        this.saldo += valor
    }

    sacar(){
        throw new Error("método sacar precisa ser implementado")
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero)
        this.aniversario = Date.now()
    }
    sacar(valor){
        if(valor > this.saldo){
            throw new Error("Saldo Insuficiente")
        }
        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero)
        this.limite = 0
    }
    sacar(valor){
        let disponivel= this.saldo + this.limite
        if(valor > disponivel){
            throw new Error("Saldo Insuficiente")
        }
        this.saldo -= valor
    }
}

const daniel = new PessoaFisica("daniel","1325.782.777-54")
const maria = new PessoaJuridica("maria","22.262.209/0001-17")

const cp1 = new ContaPoupanca(daniel, 1)
const cp2 = new ContaPoupanca(maria, 2)
const cc1 = new ContaCorrente(maria, 3)

cp1.depositar(1000)
cc1.limite = 1000
cc1.depositar(2000)
cc1.sacar(3000)
console.log(cc1)

cp1.sacar(500)
console.log(cp1)
console.log(cp2)