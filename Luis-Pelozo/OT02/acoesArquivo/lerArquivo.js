const { Console } = require('console');
var fs = require('fs');

fs.appendFile('novo.txt', 'Novo arquivo criado, githu: https://github.com/luis-pelozo', function(err){
    if(err) throw err;

    console.log('Arquivo Salvo!');
})