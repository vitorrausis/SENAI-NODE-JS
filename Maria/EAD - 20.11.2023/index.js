import express from 'express';
import {buscarUfs, buscarUfPorId, buscarUfsPorNome } from './servicos/servico.js'


const app = express();

app.get('/ufs', (req, res) => {
   const nomeUf = req.query.busca;
   const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
   if (resultado.length>0){
    res.json(resultado);

   }else { 
    res.status(404).send({"erro": "Nenhuma UF encontrada"});
   }
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);

if (uf){
    res.json(uf);
}else if(isNaN(parseInt(req.params.iduf))){
    res.status(400).send({"erro": "req invalid"});
}else{
    res.status(404).send({"erro":"not found"});
}
});



app.get('/ufs/:iduf', (req, res) => { 
    const idUF = req.params.iduf;
    res.send({"teste": `${idUF}`});

});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080 http://localhost:8080/ufs');
    console.log("http://localhost:8080/ufs/teste")
    console.log("http://localhost:8080/ufs/14")
});
