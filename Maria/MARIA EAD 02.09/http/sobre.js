import express from "express";
const app = express();
app.listen(3000, () =>
console.log("Sobre"),
console.log("http://localhost:3000/sobre"),

);

app.get('/sobre', (req, res) =>
res.send('<h1 style= "color:blue">Pagina sobre</h1>')
)