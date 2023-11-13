import express from "express";
const app = express();
app.listen(3000, () =>
console.log("Contato"),
console.log("http://localhost:3000/contato"),

);

app.get('/contato', (req, res) =>
res.send('<h1 style= "color:blue">Pagina sobre</h1>')
)