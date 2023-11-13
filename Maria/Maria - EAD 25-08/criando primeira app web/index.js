// nesta aula veremos como preceder para criar nossa primeira aplicação web com node.js
//para isso, utilizaremos o pacote http para criar um servidor e acessa-lo por meio do browser

var http = require("http");

http.createServer(function(request, response){
response.write("Primeiros passos com node.js");
response.end();

}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");