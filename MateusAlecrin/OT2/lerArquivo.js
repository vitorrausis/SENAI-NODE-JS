var fs = require('fs');

/*
fs.appendFile('novo.txt','Olá NodeJS! SENAI', function (err) {
    if (err) throw err;

    console.log("Arquivo Salvo!");
});
*/

/*
fs.writeFile('novo.txt','Olá NodeJS! UNISENAI 2023', function (err) {
    if (err) throw err;

    console.log("Arquivo atualizado!")
});
*/

/*
fs.rename('novo.txt', 'arquivoRenomeado.txt', function(err) {
    if (err) throw err;

    console.log('Arquivo renomeado!');
});
*/


fs.unlink('arquivoRenomeado.txt', function (err) {
    if (err) throw err;

    console.log('Arquivo deletado!');
});