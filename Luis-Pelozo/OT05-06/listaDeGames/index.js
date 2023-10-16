//carregando express
const express = require('express');

//instancio o express e carregando a biblioteca dele dentro dessa const app
const app = express();

app.use(express.json());



let games =[
    {title: "Sea of thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "LOL", studio: "Riot", price: 0},
    {title: "Mirror's Edge", studio: "EA", price: 80},
    {title: "God of War", studio: "Sony", price: 200},
    {title: "Portal 2", studio: "Valve", price: 70},
    {title: "Fifa Street 2", studio: "EA Sports", price: 100},
    {title: "Bully", studio: "Rockstar", price: 45},
    {title: "The sims 4", studio: "Electronic Arts", price: 100},
    {title: "Mortal kombat", studio: "Midway", price: 50},
];

app.listen(3080,()=>{
    console.log('Servidor rodando!');
});

app.get("/",(req,res)=>{
    res.json(games);
}) ;

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title, studio, price}
    //para enviar estes dados para o array agora utilizaremos o método push do js
    games.push(newGame);
    res.send("OKs");
});
   
app.put("/novogame/:index",(req,res)=>{
    const {index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

        games[index] = {title, studio, price};
    return res.json(games);

});

app.delete("/:index", (req, res) =>{
    const {index} = req.params;
    games.splice(index,1);
    return res.json({ message: "O jogo foi deletado"});
})

