const express = require("express");
const app = express();
app.use(express.json());

//Lista de Games

let games = [
    {title: "Fortnite", studio: "Epic Games", price: "Gratuito"},
    {title: "Grounded", studio: "Obsidian", price: 199},
    {title: "Crash Team Racing", studio: "Activiosion", price: 120},
    {title: "Crash Bandicoot Triology", studio: "Activiosion", price: 120},
    {title: "Starfield", studio: "Bethesda Game Studios", price: 350},
    {title: "The Texas Chain Saw Massacre", studio: "Sumo Nottingham", price: 148},
    {title: "Super mario 3", studio: "Nintendo", price: "necessita atualização"}
];

app.listen(3080,() => {
    console.log("Servidor rodando!");
});

app.get("/", (req, res) => {
    res.json(games);
});

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let time = req.body.epoca;
    let studio = req.body.studio;
    let price = req.body.price 
    
    console.log(title);
    console.log(time);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, studio, price};
    games.push(newGame);
    res.send("OK");
});

app.put("/novogame/:index", (req, res) => {
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index]= {title, studio, price};

    return res.json(games);

    res.send("OK");
});

app.delete("/:index", (req, res) =>{
    const {index} = req.params;
    games.splice(index,1);
    return res.json({ message: "O jogo foi deletado"});
})
