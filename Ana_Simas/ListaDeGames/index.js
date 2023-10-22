const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log('Servidor rodando');
})

app.get('/', (req,res) =>{
    res.json(games);
})

let games = [
    {title: 'WOW',studio: 'Blizzard', price: 'R$ 20/mes'},
    {title: 'Darkest dungeon',studio: 'Red hook studio', price: 'R$ 73.99'},
    {title: 'Bear and breakfest',studio: 'Gummy cat',  price: 'R$ 59.90'},
    {title: 'Graveyard keeper',studio: 'Gummy cat',  price: 'R$ 59.99'},
    {title: 'My time at Portia',studio: 'Gummy cat',  price: 'R$ 19.90'},
    {title: 'Stardew valley',studio: 'Gummy cat',  price: 'R$ 24.90'},
    {title: 'Unpacking',studio: 'Gummy cat',  price: 'R$ 59.99'},
    {title: 'The sims 4',studio: 'Gummy cat',  price: 'Free'},
    {title: 'Diablo II',studio: 'Gummy cat',  price: 'R$ 179.90'},
    {title: 'The legend of Zelda: Skyward Sword',studio: 'Nintendo',  price: 'R$ 299.99'},
]