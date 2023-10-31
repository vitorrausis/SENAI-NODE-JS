const express = require("express");

const app = express();
app.use(express.json());

app.listen(3080, () => {
    console.log("Servidor Rodando!");
})


let games = [
    { title: "Sea of Thieves", studio: "Rare", price: 30 },
    { title: "WOW", studio: "Blizzard", price: 120 },
    { title: "Valorant", studio: "Riot", price: 0 },
    { title: "COD", studio: "Activision", price: 200 },
    { title: "Minecraft", studio: "Mojang", price: 800 },
    { title: "Halo", studio: "Microsoft", price: 90 },
    { title: "The Witcher 3: Wild Hunt", studio: "CD Projekt Red", price: 40 },
    { title: "Red Dead Redemption 2", studio: "Rockstar Games", price: 60 },
    { title: "Cyberpunk 2077", studio: "CD Projekt Red", price: 50 },
    { title: "Assassin's Creed Valhalla", studio: "Ubisoft", price: 55 }
];

app.get("/", (req, res) => {
    res.json(games);
})


app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGames = { title, studio, price };

    games.push(newGames);


    res.send("OK");
});

app.put(`/novogame/:index`, (req, res) => {
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = { title, studio, price };

    return res.json(games);
})

app.delete("/:index", (req, res) => {
    const { index } = req.params;
    games.splice(index, 1)
    return res.json({ message: "O jogo foi deletado" });
})