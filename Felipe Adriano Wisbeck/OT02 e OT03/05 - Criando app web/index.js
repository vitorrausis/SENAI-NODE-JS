var http = required(`http`);
httpp.createServer(function(request, response){
response.write(`Primeiros passos com node.JS`)
response.end();
}).listen(8081);

console.log(`Servidor rodando em http://localhost:8081`);