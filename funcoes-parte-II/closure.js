const teste = (function(){
    let n =0
    return function testeInterno(){
        console.log('testeInterno Chamado', n)
        return "retorno de teste interno" + n
    }
})()


let str = teste()
console.log(str)