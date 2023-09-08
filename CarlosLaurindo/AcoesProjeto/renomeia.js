const fs= require('fs');

const arquivoNomeAntigo = "novo.txt";
const arquivoRenomeado = "ArquivoNovoRenomeado.txt";

fs.rename(arquivoNomeAntigo,arquivoRenomeado, (err)=>{
    if(err){
        console.error("erro ao renomear o arquivo:", err);
    }else{
        console.log("Arquivo Renomeado com Sucesso!");
    }
});