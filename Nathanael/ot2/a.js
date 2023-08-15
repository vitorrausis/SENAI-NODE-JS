var fs = require('fs');

fs.appendFile('novo.txt', 'olá NodeJS! SENAI', function (err) {
    if (err) throw err;

    console.log('Aqruivo Salvo!');
});


