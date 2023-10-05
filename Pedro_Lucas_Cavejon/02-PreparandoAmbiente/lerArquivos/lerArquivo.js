var fs = require("fs");
//Cria o arquivos AppendFile
//fs.appendFile('novo.txt', 'Olá NodeJS SENAI', function(err){

//Renomeia o arquivo Rename
fs.rename('novo.txt', 'Olá Node.JS! UNISENAI 2023', function (err) {
    if (err) throw err;

    console.log('Arquivo Salvo');

});