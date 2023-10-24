function criarCachorro(name){
    let posicao = 0
   return {
        name,
        latir(){
            console.log(this.name, " esta latindo")
        },
        andar(distancia){
            posicao += distancia
            console.log(this.name, "andou", distancia, "m")
        }
        pegaPosicao(){
            return posicao
        } 
    }
    

}

const rex = criarCachorro("rex")
rex.andar(10)
console.log(rex.pegaPosicao())
console.log(rex)