//carregando o express
const express = require("express");
//instancio o express e carregamento a biblioteca do express dentroo dessa const app
const app = express();
app.use(express.json());

app.listen(3080,() => {
    console.log("Servidor rodando!");
})



app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price}
    games.push(newGame)

    res.send("OK");
});

app.get("/", (req, res) => {
    res.send(games);
})

app.put('/novogame/:index', (req, res) =>{
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = { title, studio, price };

    return res.json(games);
})

app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    games.splice(index,1);
    return res.json({ message: "O Jogo foi deletado "})
})

//lista de games
let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Grounded", studio: "Obsidian", price: 200},
    {title: "LOL", studio: "Riot", price: 0},
    {title: "CIV VI", studio: "2K Games", price: 78},
    {title: "R6", studio: "Ubisoft", price: 60}
]