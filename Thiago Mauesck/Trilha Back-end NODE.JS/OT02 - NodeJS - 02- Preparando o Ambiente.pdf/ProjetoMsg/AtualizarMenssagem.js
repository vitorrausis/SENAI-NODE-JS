const fs = require("fs");

fs.writeFile('novo.txt', 'Olá Node.JS! UNISENAI 2023', function(err){
    if(err) throw err;
    console.log('Menssagem atualizada!')
});