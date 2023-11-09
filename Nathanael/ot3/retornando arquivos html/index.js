var http = require("http");
var fs = require('fs');

http. crenteserver(function(request, response){
    fs.readFile('index.html', (erro, conteudo)=>{
        if(erro){
            console.lof(erro);
        }else{
            response.write(conteudo);
        }
        response.end();
    })
}).listen(8081);

console.log('Servidor rodnando em http://localhost:8081');
