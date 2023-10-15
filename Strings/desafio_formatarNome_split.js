function formatarNome(nomeCompleto){

    let nomeAsArray = nomeCompleto.split(" ")
    if (nomeAsArray.length === 1){
        return nomeCompleto
    }

    let primeiroNome = nomeAsArray.shift()
    return nomeAsArray.join(" ") + ", " + primeiroNome
}


console.log(formatarNome("Fabio")) // Fabio
console.log(formatarNome("Fabio Miranda")) //Miranda, Fabio
console.log(formatarNome("Fabio Sena Miranda")) //Sena Miranda, Fabio


