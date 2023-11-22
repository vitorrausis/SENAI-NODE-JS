const fs = require('fs');

fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function(err){
    if(err) throw(err);
    console.log('Arquivo renomeado com sucesso!');
});