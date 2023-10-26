class Animal{
    constructor(tipo){
        if(tipo){
            this.tipo = tipo
        }
    }
    comer(){
        throw new Error("Method 'comer()' must be implemented")
    }
}

class Gato extends Animal{
    constructor(nome){
        super("mamifero")
        this.nome = nome
    }

    comer(){
        console.log(`${this.nome} esta comendo`)
    }
}

const animal = new Animal("mamifero")
const mingal = new Gato("mingal")