var fs = require('fs');

fs.rename('novo.txt', 'novoRenomeado.txt', (err)=>{
    if(err) throw err;
})