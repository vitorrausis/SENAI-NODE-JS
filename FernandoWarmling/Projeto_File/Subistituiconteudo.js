const fs = require("fs");

const arquivo ="novo.txt";
const novoConteudo ="Olá Node.JS! UNISENAI 2023"

fs.writeFile(arquivo,novoConteudo, (err)=>{
    if(err){
        console.error("Erro ao processar arquivo".err);
    }else{
        console.log("Conteudo alterado com sucesso")
    }
});

