function Animal (tipo){
    if (tipo) this.tipo = tipo
}  else {
    throw new Error("Erro")
}


function Cachorro(nome){
    this.nome = nome
    Animal.call(this, "mamifero")
    this.constructor = Cachorro
}
Cachorro.prototype = new Animal("mamifero")

let dog = new Cachorro("Dog")

Animal.prototype.obterTipo = function () {
    return this.tipo
}


Animal.prototype.tipo = "desconhecido"

let cachorro = new Animal("mamifero")
let gato = new Animal("mamifero")
let cobra = new Animal("reptil")
let peixe = new Animal()

let arr = new Array(1, 2, 3)


Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = " desconhecido"


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

class GatoC extends AnimalC {
    constructor(nome) {
        super("mamifero")
        this.nome = nome
    }
}