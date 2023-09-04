import express from "express";
const app = express();
app.listen(3000, () =>
console.log("Empresa"),
console.log("http://localhost:3000/empresa"),

);

app.get('/empresa', (req, res) =>
res.send('<h1 style= "color:blue">Pagina empresa</h1>')
)