import express from "express";
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome } from './servicos/servico.js';

const app = express();

app.get("/ufs", (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;
    if (resultado.length > 0) {
        res.json(resultado)
    } else {
        res.status(404).send({ "Erro": "nennhuma UF foi encontrada" });
    }
});

app.get("/ufs/:iduf", (req, res) => {
    const uf = buscarUfsPorId(req.params.iduf);
    if (uf) {
        res.json(uf);
    } else if (isNan(parseInt(req.params.iduf))) {
        res.status(404).send({ "erro": "Requisicao Invalida" });
    } else {
        res.status(404).send({ "erro": "UF Nao Encontrada" });
    }
});

app.listen(3030, () => {
    console.log("Servidor Iniciando na Porta 3030")
});