import express from 'express';
import colecaoUf from './dados/dados.js';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(idUF))) {
        uf = colecaoUf.find(u => u.id === idUF);
        if (!uf){
            mensagemErro = 'ID inexistente';
        }
    }else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf){
    res.json(uf);
    } else {
        res.status(404).send({ "erro": mensagemErro});
    }
});

//app.get('/ufs/teste', (req, res) => {
//  res.send({"teste": "teste"})
//});

app.listen(8080, () => {
    console.log('Sevidor rodando na porta do teu cu');
})