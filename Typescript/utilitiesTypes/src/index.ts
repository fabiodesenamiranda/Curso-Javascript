type Square = {
    x: number,
    y: number,
    width: number,
    height: number
}


type UpdateSquare = (a: Square, b:Partial<Square>) => Square

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    height: 200
}

//const square2: Partial<Square> = {x: 30}
//square2.x = 30

const updateSquare: UpdateSquare = (a, b) => {
    return Object.assign({}, a, b)
}

const square3 = updateSquare(square,{x: 70})
console.log(square)
//console.log(square2)
console.log(square3)