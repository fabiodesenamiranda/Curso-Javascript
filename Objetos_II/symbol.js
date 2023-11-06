const NOME = Symbol()
console.log(typeof NOME)


let n = 0
const user = {
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    [NOME]: "daniel",
    "nome": "fabio"
}

console.log(user)