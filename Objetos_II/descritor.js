const pessoa = {
    nome: "fabio"
}

console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"))

Object.defineProperty(pessoa, "sobrenome", {
    value: "Miranda"
})

console.log(Object.getOwnPropertyDescriptor(pessoa, "sobrenome"))