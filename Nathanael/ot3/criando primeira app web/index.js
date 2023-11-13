var http = require("http");

http. crenteserver(function(request, response){
    response.write('Primeiros passos com node.js');
    response.end();
}).listen(8081);

console.log('Servidor rodnando em http://localhost:8081');
