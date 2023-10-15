let x = [10]
let y = {n: 10}

function mudaX(n){
    x.push(11)
    console.log("x interno", x)
}

function mudaY(obj){
    obj.n++
}

mudaX(x)
console.log("x externo", x)

mudaY(y)
console.log(y)