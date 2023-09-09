const http = require('http');
const fs = require('fs');


http.createServer(function(req,res){
    fs.readFileSync('index.html', (erro,conteudo) =>{
        if(erro){
            console.log(erro);
        }else{
            res.write(conteudo);
        }
        res.end();
    })
}).listen(8081);

console.log('Server rodando em http://localhost:8081');