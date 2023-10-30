function Animal(){}

Animal.prototype.whoAmI = function () {
    return this
}

Animal.categoriua = "ser vivo"

const dog = new Animal()


// ES6
class Cachorro{
    constructor(nome){
        this.nome = nome
    }

    static comer() {
        console.log(this)
        console.log("comendo")
        this.beber()
    }

    static beber() {
        console.log("bebendo")
    }
}

const dog2 = new Cachorro("rex")