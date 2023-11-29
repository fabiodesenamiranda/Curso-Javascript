import "core-js"
import axios from "axios"


const getAddress = async (cep) => {
    let url  = 'https://viacep.com.br/ws/${cep}/json/'
    try {
        const resposta = await axios.get(url)
       
        const json = resposta.data
        console.log(json)
        return json
    } catch (e) {
        throw e
    }  
}

console.log("---------")
const endereco = getAddress("03136-050").then(data => console.log)
console.log(endereco)