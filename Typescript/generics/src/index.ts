// function somaOuConcatena(x: number, y: number): number{
//     return x + y
// }

function somaOuConcatena(x: number | string, y: number | string): number{
    return (typeof x === "number" && typeof y === "number")? x + y : x + "" + y
}

somaOuConcatena(1, 2)
somaOuConcatena("1", "2")
somaOuConcatena("1", 2)


type NumberOrString = number | string

function somaOuConcatenaG<T extends NumberOrString>(x: T, y: T){
    return (typeof x === "number" && typeof y === "number")? x + y : x + "" + y
    
}

somaOuConcatenaG(1,2)
somaOuConcatenaG("1","2")
somaOuConcatenaG("1","2")

