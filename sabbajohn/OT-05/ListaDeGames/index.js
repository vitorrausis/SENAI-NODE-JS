const express = require('express');
const app = express();

let games = [
    {title:"Sea of Theeves", studio:"Rare", price:30},
    {title:"WoW", studio:"Blizzard", price:120},
    {title:"Valorant", studio:"Riot", price:0},
    {title:"COD", studio:"Activision", price:200},
    {title:"Minecraft", studio:"Mojang", price:80},
    {title:"Halo",  studio:"Microsoft", price:90},
    {title:"Black",  studio:"Eletronic Arts", price:120},
    {title:"FIFA",  studio:"Eletronic Arts", price:100},
    {title:"Battlefield 1",  studio:"Dice", price:300},
    {title:"Battlefield 4",  studio:"Dice", price:150},
    {title:"Battlefield 5",  studio:"Dice", price:350},
]
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.get('/', (req, res) => {
    res.json(games);
})