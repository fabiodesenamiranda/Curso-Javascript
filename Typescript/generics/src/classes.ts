class Pessoa<T> {
    constructor(private nome: T) {}

    setNome(nome: T): void{
        this.nome = nome
    }
}

const fabio = new Pessoa ("fabio")
fabio.setNome("fabio sena")


class List<T>{
    private list: T[] = []

    getFromList(index: number): T | null{
        const len = this.list.length
        if(len === 0) return null
        if(index > len || index < 0) return null
        return this.list[index]
    }
    removeFromList(index: number): T | null{
        const element = this.getFromList(index)

        if(element !== null){
            this.list.splice(index, 1)
            return element
        }
        return null
    }

    addToList(element: T){
        this.list.push(element)
        return this
    }
}

class Animal<T> {
    constructor(private nome: T) {}

    setNome(nome: T): void{
        this.nome = nome
    }
}




const listPessoa = new List<Pessoa<string>>()
    .addToList(fabio)
    .addToList(new Pessoa("maria "))
    .addToList(new Pessoa("joao"))
   // .addToList(new Animal("toto")) 

const listAnimal = new List<Animal<string>>()
listAnimal
    .addToList(new Animal("toto"))
    .addToList(new Animal("mingal")) 

console.log(listPessoa.getFromList)
listPessoa.removeFromList(1)
console.log(listPessoa)