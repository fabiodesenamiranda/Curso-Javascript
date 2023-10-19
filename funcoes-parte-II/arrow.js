function teste (str){
    console.log("function espression teste", str)
    return "fn expression" + str
}

const testeArrow = str => {
    console.log("Arrow Function",str)
    return "Arrow - " + str
}

const t2 = testeArrow("parametro para arrow fn")


console.log(t2)