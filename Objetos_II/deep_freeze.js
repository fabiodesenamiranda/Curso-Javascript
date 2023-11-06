const obj1 = {
    foo: "bar",
    internalProp: {}
}

Object.freeze(obj1)
obj1.foo = "alterado"
//console.log(obj1)

obj1.internalProp.foo = "bar 2"
//console.log(obj1)

obj1.internalProp = {teste: "teste"}

function deepFreeze(obj){
    const propNames = Object.getOwnPropertyNames(obj)
    
    propNames.forEach(name => {
        let prop = obj[name]

        if(typeof prop === "object" && prop !== null){
            deepFreeze(prop)
        }
    })
    return Object.freeze(obj)
}

const obj2 = {
    foo: "bar", 
    internalProp: {
        array: [1,2,3],
        internalObject: { teste: "teste"}
    }
}

deepFreeze(obj2) 
obj2.foo = "alteradp"
//obj2.internalProp.array.push("alterado")
obj2.internalProp.internalObject.teste = "alterado"
console.log(obj2)