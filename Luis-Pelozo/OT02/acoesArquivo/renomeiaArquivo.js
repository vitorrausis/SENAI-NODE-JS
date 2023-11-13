const fs = require('fs');

// Nome atual do arquivo
const nomeDoArquivoAtual = 'novo.txt';
const novoNomeDoArquivo = 'ArquivoNovoRenomeado.txt';

fs.rename(nomeDoArquivoAtual, novoNomeDoArquivo, (err) => {
    if (err) {
        console.error('Erro ao renomear o arquivo:', err);
        return;
    }
    console.log('Arquivo renomeado com sucesso.');
});
