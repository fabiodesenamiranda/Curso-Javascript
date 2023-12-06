import axios, { AxiosResponse } from 'axios'
import { ResponseUser } from './index'


async function Fn(): Promise<string> {
    return "retorno de algo"
}

const fn = Fn()
fn.then( n => console.log("valor de n:" + n))

async function getUser(id: number): Promise<ResponseUser>{
    try {
        const resposta = await axios.get<ResponseUser>("http://localhost:3001/users" + id)
        console.log(resposta.data)
        return resposta.data
        
    } catch (e) {
        throw new Error("Error dispatch: " + e.message)
        
    }
}

getUser(1).then(dado => {
    console.log("dado")
    console.log(dado)
}).catch(e => {
    console.log("deu ruim")
    console.log(e.message)
})