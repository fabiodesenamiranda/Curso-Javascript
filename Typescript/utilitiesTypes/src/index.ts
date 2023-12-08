//Partial

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

// Pick

type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 20,
    y: 50
}

// Omit 
 type Size = Omit<Square, "x" | "y">
 const size: Size = {
    width: 200,
    height: 300
 }

 // Exclude<T, U>
type SquareColor = "red" | "blue" | "green" | "black" | "white"

type SaturatedColor = Exclude<SquareColor, "black" | "white">

type SadColor = "black" | "white" | "grey"

type SadSquareColor = Extract<SquareColor, SadColor>
type HappySquareColor = Exclude<SquareColor, SadColor>

type User = {
    name: string,
    email: string,
    id?: number
}


//Required
type UserGet = Required<User>

type UserPatch = Partial<User>
const maria : UserPatch = {id: 2}


//Readonly
type UserRead = Readonly<User>
const fabio: User = {
    name: "fabio",
    email: "fabio@pixel08.com.br"
}

fabio.email = "email alterado"

//NonNullable

type Cpf = {cpf: string}
type Cnpj = {cnpj: string}

type User2 = Cpf | Cnpj | null | undefined

const user : NonNullable<User2> = {
    cpf: "111.111.111-11"
}

// Record <T, U>

type Url = {
    url: string
}

type MidiasSociais = "facebook" | "instagram" | "youtube" | "tiktok"

const midias : Record<MidiasSociais, Url> = {
    facebook: {url:"facebook.com"},
    instagram: {url:"instagram.com"},
    youtube: {url:"youtube.com"},
    tiktok: {url:"tiktok.com"}
}

console.log(midias)

// conditional types
type MyString = string
type MyType = MyString extends string | number ? string : boolean

function myFunction<T>(param: T extends string ? string : number){

}

myFunction<boolean>(2)

function myFunction2<T>(param: T){
    return function(param2: T extends number ? boolean: MyString){

    }
}

const minhaFuncao = myFunction2(100)
minhaFuncao(true)

type NumberOrNever<T> = T extends number ? number : never

const teste : NumberOrNever<number> =10


//keyof

// type OnePropertyOfSquare = "x" | "y" | "width" | "height" 
type OnePropertyOfSquare = keyof Square
let OnePropertyOfSquare: keyof Square = "x" 

//Mapped Types

type Props = "x" | "y" | "z" 
// type MappedfromProps = {
//     "x": number,
//     "y": number,
//     "z" : number
// }

type MappedfromProps<T extends string | number | symbol> = {
    [P in T]: P
}

type MyMappedTypes = MappedfromProps<Props>

type MappedfromProps2<T> = {
    [P in keyof T]: number

}

type Teste = MappedfromProps2<{a: "a", b: "b"}>

//lookup Types

type BankAccount = {
    id: number,
    name: string,
    count: {
        agency: number,
        code: number,
        digit: number
    }
}
type Id = BankAccount["id"]


type Count = BankAccount["count"]

type Digit = BankAccount["count"]["digit"]

//typeof

const myCount : BankAccount = {
        id: 1,
        name: "fabio",
        count: {
            agency: 2,
            code: 3,
            digit: 4
        }

}

type TypeOfMyCount = typeof myCount 
type TypeOfMyCountId = typeof myCount.id 