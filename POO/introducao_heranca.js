function Animal(tipo){
    if (tipo) this.tipo = tipo

}



Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = " desconhecido"

function Cachorro(nome, tipo) {
    this.name = nome
    Animal.call(this, tipo)
}

Cachorro.prototype = new Animal()

let rex = new Cachorro("Rex", "Mamifero")
console.log(rex)

for(let prop in rex) {
    if (rex.hasOwnProperty(prop)){
        console.log(prop)
    }
}

console.log(rex instanceof Animal)
console.log(Cachorro.prototype.isPrototypeOf(rex))
console.log(Object.getPrototypeOf(rex))