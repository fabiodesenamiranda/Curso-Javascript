function Cachorro(name){
    let posicao = 0

    this.name = name  
    
    
    this.latir = function (){
        console.log(this.name, " esta latindo")
    }

    this.andar = function (distancia){
        posicao += distancia
        console.log(this.name, " andou", distancia, "m")
        console.log("A posicao atual e: ", posicao) 

    }   

    const rex = new Cachorro("rex")
    const toto = new Cachorro("toto")

    console.log(rex)
    rex.latir()
    rex.andar(5)


}