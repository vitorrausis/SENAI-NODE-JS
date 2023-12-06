const express = require("express");

const app = express();

let games = [
    {title: "Sea of Thievs", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Dying Light", studio: "Ubsoft", price: 70},
    {title: "LoL", studio: "Riot", price: 0},
    {title: "Battlefield", studio: "EA", price: 200},
    {title: "Far Cry 3", studio: "Ubisoft", price: 35}
]

app.use(express.json());

app.listen(3080, () =>{
    console.log("Servidor rodando!");
})

app.get("/", (req, res) =>{
    res.send(games);
})

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title, studio, price}

    games.push(newGame);

    res.send("OK");
});

app.put('/novogame/:index', (req, res) =>{
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, studio, price};

    return res.json(games);
})

app.delete("/:index", (req, res) => {
    const { index } = req.params;
    games.splice(index,1);
    return res.json({ message: "O jogo foi deletado"});
})