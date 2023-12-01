function add(x: unknown, y: unknown){
    if(typeof x === "number" && typeof y === "number"){
        return x + y    
    }
    return"numero string"
}

const teste = add(3,5)

