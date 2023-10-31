let tipo = ""

const tiposPermitidos = {"mamifero": true, "anfibio": true, "reptil": true}

const cachorro = {
    nome: "rex",
    get tipo(){
        return tipo
    },
    set tipo(_tipo){
        if(tiposPermitidos[_tipo]) {
            tipo = _tipo
        }
        
    }

}

