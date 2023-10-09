const express = require('express');

const app = express();

app.use(express.json());


app.listen(3080, () => {
    console.log('Servidor rodando!')
});

app.get('/', (req,res)=>{
    res.json(games);
});

app.post('/novogame', (req,res)=>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title,studio,price}
    games.push(newGame);

    res.send('ok');
});










let games = [
    {title:'Sea of Thives',studio:'Rare',price:30},
    {title:'WoW',studio:'Blizzard',price:120},
    {title:'Valorant',studio:'Riot Games',price:0},
    {title:'CoD',studio:'Activision',price:200},
    {title:'Minecraft',studio:'Mojang',price:80},
    {title:'Halo',studio:'Microsoft',price: 90},
    {title:'League of legends',studio:'Riot Games',price:0},
    {title:'Fortinite',studio:'EpicGames',price:0},
    {title:'Forza Horizon 5',studio:'Xbox Game Studio',price:200},
    {title:'TrackMania Turbo',studio:'Ubisoft',price:0},
    {title:'Elder Ring',studio:'Bandai Namco',price:360},
    {title:'Starfild',studio:'Microsoft',price:270},
    {title:'Stray',studio:'BlueTwelve Studio',price:113},
    {title:'God of War Ragnarok',studio:'Sony',price:270},
    {title:'Horizon Forbidden West',studio:'Sony',price:270},
    {title:'It takes two',studio:'EA',price:160},
]


    
    