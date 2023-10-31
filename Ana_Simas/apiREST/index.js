import express from 'express';
import colecaoUf from './dados.js';

const app = express();

app.get('/ufs', (req,res) => {
    res.json(colecaoUf);
});

app.get('/ufs/:iduf', (req,res) => {
    const iduf = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    //id é um número? se sim, segue
    if(!(isNaN(iduf))){
        uf = colecaoUf.find(u => u.id === iduf);
        if(!uf){
            mensagemErro = 'UF não encontrada';
        }
    }else{
        mensagemErro = 'Requisição inválida';
    }

    if(uf){
        res.json(uf);
    } else {
        res.status(404).send({"erro": mensagemErro});
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});