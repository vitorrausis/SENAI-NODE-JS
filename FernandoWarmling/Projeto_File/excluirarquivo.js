const fs = require ('fs');

const arquivoExcluir = "ArquivoNovoRenomeado.txt"

fs.unlink(arquivoExcluir,(err)=>{
    if(err){
        console.error('Erro ao excluir arquivo:',err);
    }else{
        console.log('Arquivo Excluido Com sucesso!');
    }
})