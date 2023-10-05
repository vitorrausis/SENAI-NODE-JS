//carregando o express 
const express = require ("express");
//instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

app.listen(3000,()=> {
    console.log("servidor rodando!" +"http://localhost:3000");
})

app.get("/",(req,res)=> {
    res.send("<h1>Olá, mundo!</h1>");
})

