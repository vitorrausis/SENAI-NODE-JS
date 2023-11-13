const fs = require('fs');
const nomeDoArquivo = 'ArquivoNovoRenomeado.txt';

fs.unlink(nomeDoArquivo, (err) => {
    if (err) {
        console.error('Erro ao excluir o arquivo:', err);
        return;
    }
    console.log('Arquivo excluído com sucesso.');
});
