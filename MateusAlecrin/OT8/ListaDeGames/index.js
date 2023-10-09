const express = require("express");
const app = express();
app.use(express.json());

//Lista de Games

let games = [
    {title: "Assassin's Creed Odyssey",        epoca:"431 - 404 AC",   studio: "Ubisoft Quebec",   price: 199.00},
    {title: "Assassin's Creed Origins",        epoca:"49 - 43 AC",     studio: "Ubisoft Montreal", price: 199.00},
    {title: "Assassin's Creed Valhalla",       epoca:"873 DC",         studio: "Ubisoft Montreal", price: 279.95},
    {title: "Assassin's Creed",                epoca:"1191 DC",        studio: "Ubisoft Montreal", price: 90},
    {title: "Assassin's Creed II",             epoca:"1476 - 1499 DC", studio: "Ubisoft Montreal", price: 90},
    {title: "Assassin's Creed Revelations",    epoca:"1511 DC",        studio: "Ubisoft",          price: 90},
    {title: "Assassin's Creed IV Black Flag",  epoca:"1712 - 1722 DC", studio: "Ubisoft Montreal", price: 99.00},
    {title: "Assassin's Creed Rogue",          epoca:"1756 - 1763 DC", studio: "Ubisoft Sofia",    price: 79.00},
    {title: "Assassin's Creed III",            epoca:"1754 - 1783 DC", studio: "Ubisoft",          price: 90},
    {title: "Assassin's Creed III Liberation", epoca:"1765 - 1780 DC", studio: "Ubisoft",          price: 90},
    {title: "Assassin's Creed Unity",          epoca:"1776 - 1800 DC", studio: "Ubisoft Montreal", price: 99.00},
    {title: "Assassin's Creed Syndicate",      epoca:"1868 DC",        studio: "Ubisoft Quebec",   price: 89.95},
    {title: "Assassin's Creed Brotherhood",    epoca:"1500 - 1507 DC", studio: "Ubisoft",          price: 90},
    {title: "Super Mario Bros",                epoca: "1985",          studio: "Nintendo Research & Development 4",                 price: 185.3},
    {title: "Super Mario Bros 3",              epoca: "1988",          studio: "Nintendo Entertainment Analysis & Development",     price: 175.3},
    {title: "Super Mario World",               epoca: "1990",          studio: "Nintendo Entertainment Analysis & Development",     price: 165.3},
    {title: "Super Mario 64",                  epoca: "1996",          studio: "Nintendo Entertainment Analysis & Development",     price: 155.3},
    {title: "Super Mario Galaxy",              epoca: "2007",          studio: "Nintendo Entertainment Analysis & Development",     price: 145.3},
    {title: "Super Mario Odyssey",             epoca: "2017",          studio: "Nintendo's Entertainment Planning & Development",   price: 135.3}
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

app.put('/novogame/:index', (req, res) => {
    const { index } = req.params;
    let title = req.body.title;
    let epoca = req.body.epoca;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, epoca, studio, price};

    return res.json(games);
});

app.delete("/:index", (req, res) => {
    const { index } = req.params;
    games.splice(index, 1);
    return res.json({ message: "O Jogo foi deletado"});
});



