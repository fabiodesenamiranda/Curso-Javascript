//replace() e replaceAll()**

let str1 = "minha sTring Bacana"
console.log(str1.replace("i","o"))
console.log(str1)

//indexOf(), lastIndexOf() e includes()

console.log(str1.indexOf("string")) //indice 6

console.log(str1.lastIndexOf("i")) //último indice

console.log(str1.includes("minha")) //inclui na string?, retorna booleano


//slice() e substring()

console.log(str1.slice(2,7)) //cortar
console.log(str1.substring(2,7)) //cria outra string

console.log(str1.slice(-5,-1)) //de traz para frente
console.log(str1.substring(-5,-1)) //retorna string vazia

console.log(str1.slice(5,2)) //retorna string vazia
console.log(str1.substring(5,2)) //retorna string



//toLowerCase() e toUpperCase()

console.log(str1.toUpperCase()) //transforma string em maiuscula

console.log(str1.toLowerCase()) //transforma string em minuscula

console.log(str1)


//valueof() = retorna um valor primitivo de um objeto do tipo string

let strAsObj = new String("minha string como obj") 

console.log(strAsObj)
console.log(strAsObj.valueOf())
console.log(strAsObj.toString())

//trim(), trimEnd() e trimStart()  = remove quebra de linhas, pulo de linha e os espaços em branco no começo e fim de uma string

str1 = "      " + str1 + "     "

console.log(str1)

console.log(str1.trim()) // remove os espaços em branco no começo e fim de uma string

console.log(str1.trimEnd()) // remove os espaços em branco no fim de uma string

console.log(str1.trimStart) //remove os espaços em branco no começo 


//padStart() e padEnd() = preenchimento da string

str1 = "0123456789"

console.log(str1.padStart(20, "*")) //preenche uma length de 20 (10* e 10 numeros) no começo.
console.log(str1.padEnd(20, "*")) //preenche uma length de 20 (10* e 10 numeros) no fim
console.log(str1)


let telefone1 = "91234-2345" //9****-**45
let telefone2 = "1234-2345" //1***-**45
function mascararTelefone(numero){
    let hifenPosicao = numero.indexOf("-")
    let numeroInicio = numero.slice(0, hifenPosicao)
    let numeroFinal = numero.slice(hifenPosicao + 1)
    
    let doisUltimosNumeros = numeroFinal.slice(-2)
    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, '*')}`
}

console.log(mascararTelefone(telefone1))
console.log(mascararTelefone(telefone2))



//startsWith() e endsWith() = retorna um booleano e serve para verificar com outro caracter ou string

let str2 = "hoje é domingo"

console.log(str2.startsWith("hoje", 1)) // segundo parametro indica de onde iniciar a procura
console.log(str2.endsWith("hoje", 6)) // segundo parametro representa o tamanho da string




//charAt(), charCodeAt() e length 

let str3 = "abcdefgh"

console.log(str3.charAt(1)) // retorna o caracter que está no parametro
console.log(str3.charCodeAt(1)) // retorna o codigo da tabela de unicode
console.log(str3.length()) // retorna o comprimento da string

