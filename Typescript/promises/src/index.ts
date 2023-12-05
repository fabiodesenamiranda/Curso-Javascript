import axios from 'axios'

type ResponseUser = { name: string, id: number, email: string }

axios.get<Array<ResponseUser>>("http://localhost:3001/users").then((respose) => {
    const resposta = respose.data[0]
    console.log(resposta.name)
})