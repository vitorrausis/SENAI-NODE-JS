//Carregando o express
const express = require("express");
//Instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

app.use = (express.json());

app.listen(3080, () => {
    console.log("Servidor rodando");
});

let games = [
    { title: "Sea of Thieves", studio: "Rare", price: 30 },
    { title: "WOW", studio: "Blizzard", price: 120 },
    { title: "Valorant", studio: "Riot", price: 0 },
    { title: "Call of Duty", studio: "Activision", price: 200 },
    { title: "Minecraft", studio: "Mojang", price: 200 },
    { title: "Halo", studio: "Microsoft", price: 200 },

    { title: "Need for Speed", studio: "Eletronic Arts", price: 0 },
    { title: "League of Legends", studio: "Riot", price: 200 },
    { title: "Counter Strike Global Offensive", studio: "Valve", price: 200 },
    { title: "BorderLands 2", studio: "Gearbox ", price: 200 }
];

app.get("/", (req, res) => {
    res.json(games);
});



app.post("/novogame", (req, res) => {
    
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    // console.log(title);
    // console.log(studio);
    // console.log(price);

    let newGame = { title, studio, price };
    //para enviar estes dados para o array agora utilizamos o método push do js

    games.push(newGame);
    res.send("OK");
    
});


app.delete("/:index", (req,res)=>{
    const {index} = req.params;
    games.splice(index,1);
    return res.json({ message: "O Jogo foi deletado "});
})
