var fs = require('fs');

fs.appendFile('novo.txt', 'Olá, Este é um código do Nodejs', function(err){
    if(err) throw err;
    console.log('Arquivo salvo');
});