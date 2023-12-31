

// class Animal {
//     categoria: string
//     constructor(categoria: string){
//         this.categoria = categoria
//     }
// }


// mais curta
abstract class Animal {
    constructor(protected readonly categoria: string){ }

    mostrarCategoria(): void {
        console.log(`A categoria é:  ${this.categoria}`)
    }
}

class Gato extends Animal {
    private nome: string
    constructor(nome: string){
        super("mamifero")
        this.nome = nome 
    }

    mostrarDetalhes(): void {
        console.log(this.nome, this.categoria)

    } 

}

class Cachorro extends Animal{
    constructor(private _nome: string) {
       super("mamifero")
    }

    get nome(){
        console.log("get chamado")
        return this._nome
    }

    set nome(n: string){
        console.log("set chamado")
        this._nome = n
    }
    
    

    mostrarDetalhes(): void{
        console.log(this._nome + " é um " + this.categoria)
    }
}

// const animal = new Animal("mamifero")
// console.log(animal)
// animal.mostrarCategoria()
//animal.categoria = "categoria editada fora da classe"
//console.log(animal)
const mingal = new Gato("mingal")
mingal.mostrarDetalhes()
//mingal.nome = "nome alterado"
//console.log(mingal)

const toto = new Cachorro("toto")
toto.nome = "novo nome toto"
console.log(`toto.nome: `, toto.nome )
toto.mostrarDetalhes()
toto.mostrarCategoria()

class Cliente {
    private readonly _listaAnimais: Animal [] = [] // endereço do memória AA
    private _tempListaAnimais: Animal[] = []

    adicionarAnimais(...animais: Animal[]): void {
                this._listaAnimais.push(...animais)

                this._tempListaAnimais.length = 0
                this._tempListaAnimais = [...this._listaAnimais]
    }
    get listaAnimais(){
        return [...this._listaAnimais]
    }

}

const fabio = new Cliente()
fabio.adicionarAnimais(toto, mingal)
fabio.listaAnimais.length = 0
console.log(fabio)