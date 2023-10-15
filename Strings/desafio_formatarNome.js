function formatarNome(nomeCompleto){
    nomeCompleto = nomeCompleto.trim()
    let primeiroEspaco = nomeCompleto.indexOf(" ")
    if(primeiroEspaco <0){
        return nomeCompleto
    }

    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
    let sobreNome = nomeCompleto.slice(primeiroEspaco + 1)
    return sobreNome + ", " + primeiroNome
}


console.log(formatarNome("Fabio")) // Fabio
console.log(formatarNome("Fabio Miranda")) //Miranda, Fabio
console.log(formatarNome("Fabio Sena Miranda")) //Sena Miranda, Fabio


console.log("abc def gh".split("e"))