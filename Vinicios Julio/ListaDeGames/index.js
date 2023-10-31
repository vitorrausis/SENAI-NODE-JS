//carregando o express
const express = require("express");
//instanciando o express e carregando a biblioteca do express dentro dessa cons app
const app = express();

app.use(express.json());
//Lista de Games

let games = [

{title: "sea Of Thieves" , Studio: "Rare", price: 30},
{title: "WOW" , Studio: "Blizzard", price: 120},
{title: "Valorant" , Studio: "Riot", price: 0},
{title: "COD" , Studio: "Activision", price: 200},
{title: "Minecraft" , Studio: "Mojang", price: 80},
{title: "Halo", studio: "Microsoft", price: 200 },
{title: "Need for Speed", studio: "Eletronic Arts", price: 0 },
{title: "League of Legends", studio: "Riot", price: 200 },
{title: "Counter Strike Global Offensive", studio: "Valve", price: 200 },
{title: "BorderLands 2", studio: "Gearbox ", price: 200 }

];

app.listen(3080,() =>{
console.log("Servidor rodando");
});
app.get("/", (req, res) => {
res.json(games);
});

app.post("/novogame", (req, res) => {
let title = req.body.title;
let studio = req.body.studio;
let price = req.body.price;

console.log(title);
console.log(studio);
console.log(price);

let newGame = { title, studio, price }
//para enviar estes dados para o array agora utilizamos o metodo push do js
games.push(newGame)
res.send("OK");
});

//att um curso
app.put('/novogame/:index', (req,res) =>{
const {index} = req.params;
let title = req.body.title;
let studio = req.body.studio;
let price = req.body.price;

games[index] = { title, studio, price };

return res.json(games);
});