const str = "global string"

function teste() {
    console.log(this)
    console.log(str)
}


const teste2 = () => {
    console.log("arrow fuction")
    console.log(this)
}

teste2()

//teste()

const obj = {
    foo: "bar",
    teste,
    teste2
}

obj.teste()
obj.teste2()