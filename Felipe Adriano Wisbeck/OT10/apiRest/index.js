import express from `express`;
import colecaoUF from `./dados/Dados.js`;

const app = express();

app.get(`/ufs`, (req, res) => {
    res.json(colecaoUF)
});

app.listen(8080, () => {
    console.log(`Servidor Iniciando na Porta 8080`)
});