var fs = require('fs');

let dados = 'Esse é o texto que irá substituir no arquivo original';

fs.writeFile('novo.txt', dados, (err)=>{
    if(err) throw err;
})