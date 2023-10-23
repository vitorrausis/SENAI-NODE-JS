import express from "express";
const app = express();

app.listen(3000, () =>
console.log("Servidor iniciado na porta 3000")
);

app.get('/',(req,res)=>
res.send('<h1 style="color: blue">CRIANDO UM SERVIDOR COM EXPRESS.JS</h1>')
);

//caminho do sobre
app.get('/sobre', (req, res) =>
  res.send('<h1 style="color: blue">PÁGINA SOBRE</h1>')
);

//caminho do contato
app.get('/contato', (req, res) =>
  res.send('<h1 style="color: blue">PÁGINA CONTATO</h1>')
);

//caminho da pag emresa
app.get('/empresa', (req, res) =>
  res.send('<h1 style="color: blue">PÁGINA EMPRESA</h1>')
);

