import * as fs from 'fs/promises';
fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err){
    if (err) throw err;
    console.log('Arquivo salvo!');
});
