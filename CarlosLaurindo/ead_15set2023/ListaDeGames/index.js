const express = require("express");

const app = express();

let games = [
    {title: "Sea of Thieves", studio: "rare"},
    {title: "WOW", studio: "Blizzard"},
    {title: "Valorant", studio: "Riot"},
    {title: "COD", studio: "Activision"}
]

let gamesFavoritos = [
    {title: "Fortnite", studio: "Epic Games", price: "Gratuito"},
    {title: "Grounded", studio: "Obsidian", price: 199},
    {title: "Crash Team Racing", studio: "Activiosion", price: 120},
    {title: "Crash Bandicoot Triology", studio: "Activiosion", price: 120},
    {title: "Starfield", studio: "Bethesda Game Studios", price: 350},
    {title: "The Texas Chain Saw Massacre", studio: "Sumo Nottingham", price: 148},
    {title: "Super mario 3", studio: "Nintendo", price: "necessita atualização"}
]

app.listen(3080,() =>{
    console.log("Servidor rodando!");
})

app.get("/", (req, res) => {
    res.json(newGame);
})

let newGame = null; // Inicializa a variável newGame como null no escopo global

app.use(express.json());

app.post("/newGame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    newGame = {title, studio, price};
    games.push(newGame);
    res.send("OK");
});

app.get("/", (req, res) => {
    res.json(newGame);
})


