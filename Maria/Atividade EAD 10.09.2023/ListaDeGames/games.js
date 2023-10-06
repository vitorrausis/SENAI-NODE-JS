const express = require("express");

const app = express();

let games = [ 
{title:"Sea of Thieves", studio: "Rare", price: 30},
{title: "WOW", studio: "Blizzard", price: 120},
{title:"Valorant", studio:"Riot", price:0},
{title: "COD", studio: "Activision", price:200},
{title: "Minecraft", studio: "Mojang", price:80},
{title: "halo", studio: "microsoft", price:90},
{title: "Spiral Knights", studio: "Grey Havens, Three Rings Design, Sega", price:0},
{title: "Tales Runner", studio: "RHAON", price:0},
{title: "Love Ritmo", studio: "RBlazterx", price:0},
{title: "Habbo Hotel", studio: "Sulake", price:0}

]
app.listen(3080,()=> {
    console.log("servidor rodando!" +"http://localhost:3080");
})

app.get("/", (req,res)=> { 
    res.json(games);
   
})