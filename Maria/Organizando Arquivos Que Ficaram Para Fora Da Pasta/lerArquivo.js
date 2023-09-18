var fs = require('fs');

fs.appendFile('Arquivonovo.txt', 'UniSenai 2023', function (err) { 
    if(err) throw err;
    console.log('Arquivo Salvo!');
})
