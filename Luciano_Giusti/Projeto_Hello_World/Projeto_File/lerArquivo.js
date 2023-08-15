var fs = require('fs');
fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err){
    if (err) throw err;
    console.log('Arquivo salvo!');
});

fs. writeFile('novo.txt', 'Olá NodeJS! UNISENAI 2023', function (err){
    if (err) throw err;
    console.log('Arquivo.txt alterado!');

});

fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function(err){
    if(err) throw err;
    console.log('Arquivo renomeado!');
});

fs.unlink('ArquivoNovoRenomeado.txt', function(err){
    if(err) throw err;
    console.log('Arquivo deletado!');
});