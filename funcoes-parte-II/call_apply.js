var name = "Fabio"

function teste (str, n){
    console.log(this.name)
    console.log(str,n)
}

teste("string", 10)

teste.call({name: "Maria"}, "string", 20)
teste.call({name: "Joao"}, "da Silva", 20)

const teste2 = teste.bind({name: "Joana"})

teste2("Joaquina",30)