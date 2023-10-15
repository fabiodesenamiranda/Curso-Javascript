let numero = 1234567.890


console.log(numero.toFixed(2)) 
console.log(numero.toPrecision(6)) 

numero = 12.34567

console.log(numero.toExponential())

numero = 15

console.log(numero.toString())

console.log(0 .toString(2))

console.log((16).toString(16))

numero = 123456.789
console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-BR"))
console.log(numero.toLocaleString("pt-BR",{style: "currency", currency:"BRL"}))
console.log(numero.toLocaleString("pt-PT",{style: "currency", currency:"EUR"}))
console.log(numero.toLocaleString("usa",{style: "currency", currency:"USD"}))

console.log(Number.MAX_VALUE, Number.MIN_VALUE)
let numeroAsString = "a3.456"
console.log(isNaN(numeroAsString))
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsString))