function latir() {
    console.log(this.name, "fala: au au")
}


function miar() {
    console.log(this.name, "fala: miau")
}


const dog = {
    name: "rex",
    falar: latir
        
}

const cat = {
    name: "mingal",
    falar() {
        console.log(this)
        miar.call(this)
    }
}

dog.falar()

cat.falar()