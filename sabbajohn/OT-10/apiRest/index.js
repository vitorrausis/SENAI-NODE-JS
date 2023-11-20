import Express from "express";
import colecaoUf from "./dados/dados.js";

const app = Express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
const buscarUfsPorNome = (nomeuf) => {
    return colecaoUf.filter((uf) => uf.nome.toLocaleLowerCase().includes(nomeuf.toLocaleLowerCase()));
}

app.get("/ufs", (req, res) => {
    const nomeUf =  req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;
    if(resultado.length>0) {
        res.send(resultado)
    }else{
        res.status(404).send("Não encontrado");
    }
});

app.get("/ufs/test",(req,res)=>{
    res.send({"test":"test"});
})

app.get("/ufs/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    if(!(isNaN(id))){
        let uf = colecaoUf.find(uf => uf.id == id);
        if(uf){
            res.send(uf);
        }else{
            res.status(404).send("UF não encontrada");
        }
    }else{
        res.status(400).send("ID inválido");
    }
})
