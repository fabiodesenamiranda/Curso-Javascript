const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
    //res.writeHead(200, {"Content-Type": "text-plain"})
    res.writeHead(200, {"Content-Type": "text/html"})

fs.readFile("./index_original.html", (err, html) =>{
    if(err){
        res.end("Deu Erro")
    }

    const convertToTemplate = new Function("return `"+ html +"`")

    res.end(convertToTemplate.call(req))
})



}).listen(3000)

console.log("servidor rodando na porta 3000 \n http://localhost:3000")