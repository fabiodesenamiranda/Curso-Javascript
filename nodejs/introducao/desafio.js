const fs = require("fs")
const {getByFlag} = require("./getByFlag")
const dados = require("./dados/dados.json") 

const name = getByFlag("--name")

const lastname = getByFlag("--lastname")

console.log(name)
console.log(lastname)

const teste = {name: "", lastname: ""}

const dado = ["name", "lastname"].reduce((current, next)=>{
    current[next] = getByFlag("--"+next)
    return current
}, {})

dados.push(dado)

fs.writeFile("./dados/dados.json", JSON.stringify(dados), err => {
    if(err){
        throw err
    }
})

// ["name", "lastname"] => {"name", "lastname"} 

