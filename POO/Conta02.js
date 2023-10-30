// desafio conta bancaria
/*2. criar duas classes que herdam de ContaBancaria
conta correente 
- limite
- conta poupanca
-aniversario
*/

class ContaBancaria {
    constructor(cliente, numero){

        if(this.constructor === ContaBancaria){
            throw new Error("Conta Bancaria é uma classe abstrata")
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
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

const cp1 = new ContaPoupanca("Fabio", 1)
const cp2 = new ContaPoupanca("Maria", 2)
const cc1 = new ContaCorrente("Joao", 3)

cp1.depositar(1000)
cc1.limite = 1000
cc1.depositar(2000)
console.log(cc1)
caches.sacar(3001)
console.log(cc1)

console.log(cp1)
cp1.sacar(1001)