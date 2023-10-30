// desafio conta bancaria
/* 
1. criar conta abstrata ContaBancaria
-cliente
-numero
-saldo
-depositar(valor)
-sacar(valor)
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

