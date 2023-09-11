var fs = require('fs');

fs.appendFile('novo.txt', 'Olá NODE JS Senai', function (err) { 
    if(err) throw err;
    console.log('Arquivo Salvo!');
})
