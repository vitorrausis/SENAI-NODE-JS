const { Console } = require('console');
const fs = require('fs');

const nomeDoArquivo = 'novo.txt';

const textoASerAdicionado = 'UNISENAI 2023';

// Adiciona o texto desejado ao final do arquivo
fs.appendFile(nomeDoArquivo, textoASerAdicionado, 'utf8', (err) => {
    if (err) {
        console.error('Erro ao adicionar texto ao arquivo:', err);
        return;
    }
    console.log('Texto adicionado com sucesso ao arquivo.');
});

