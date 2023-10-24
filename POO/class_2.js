function Anima(tipo){
    if (tipo) this.tipo = tipo

}

let cachorro = new Animal("mamifero")
let gato = new Animal("mamifero")
let cobra = new Animal("reptil")
let peixe = new Animal()

let arr = new Array(1, 2, 3)


Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = " desconhecido"

console.log(peixe.tipo)


// ES6

class AnimalC{
    constructor(tipo){
        this.tipo = tipo 

    }

    obterTipo(){
        return this.tipo
    }
}

let animal = new AnimalC("anfibio")

console.log(animal)