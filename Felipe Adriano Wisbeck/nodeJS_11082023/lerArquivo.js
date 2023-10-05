const fs = require('fs');
fs.appendFile(`novo.txt`, 'Olá NodeJS! SENAI', function (err) {
    if (err) throw err;
    console.log(`Arquivo Salvo!`);

});

fs.readFile('./files/FILE_NAME', 'utf8', function (err, data) {
    //Enviando para o console o resultado da leitura
    console.log(data);
});
fs.rename('novo.txt', 'Olá Node.JS! UNISENAI 2023', function (err) {
    //Caso a execução encontre algum erro
    if (err) {
        //A execução irá parar e mostrará o erro
        throw err;
    } else {
        //Caso não tenha erro, apenas a mensagem será exibida no terminal
        console.log('Arquivo renomeado');
    }
}); 