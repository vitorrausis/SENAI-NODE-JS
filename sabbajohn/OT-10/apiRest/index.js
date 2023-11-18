import Express from "express";
import colecaoUf from "./dados/dados.js";

const app = Express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/ufs", (req, res) => {
    res.json(colecaoUf);
    // res.send(colecaoUf); Por padrão o retorno é tipo json
});

app.get("/ufs/test",(req,res)=>{
    res.send({"test":"test"});
})

app.get("/ufs/:id",(req,res)=>{
    const id = req.params.id;
    let uf = colecaoUf.find(uf => uf.id == id);
    res.send(uf);
})
