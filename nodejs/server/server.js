const http = require("http")
const fs = require("fs")
const { url } = require("inspector")

http.createServer((req, res) => {
    //res.writeHead(200, {"Content-Type": "text-plain"})
    


    switch(req, url){
        case "/":
            case "index.html":

               return fs.readFile("./index_original.html", (err, html) =>{
                    if(err){
                        res.writeHead(500)
                        res.end("Deu Erro")
                    }

                    res.writeHead(200, {"Content-Type": "text/html"})
                    const convertToTemplate = new Function("return `"+ html +"`")

                    res.end(convertToTemplate.call(req))
                    
                })

                case "/estilo/estilo.css":
                    res.writeHead(200, {"Content-Type": "text/css"})
                    return res.end("body {color: red; }")
                case "/img/logo.img":
                    res.writeHead(200, {"Content-Type": "image/jpg"})
                   return fs.createReadStream("./image.jpg").pipe(res)
                default:
                    res.writeHead(404, {"Content-Type": "text/html"})
                    res.end("<h1>404</h1>")

        }
}).listen(3000)

console.log("servidor rodando na porta 3000 \n http://localhost:3000")