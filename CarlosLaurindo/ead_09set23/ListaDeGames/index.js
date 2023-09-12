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
    res.json(gamesFavoritos);
})