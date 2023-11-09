// carregando o express
const express = require("express")


//instanciando o express  e carregando a biblioteca dp express dentro dessa const app
const app = express()


app.use(express.json());


app.listen(3080,()=>{
    console.log("Servidor rodando!");;;;
})

//app.get("/",(req,res)=>{
  //  res.send("Ola mundo!");
//})

let games =[ 
    {title:"Sea of Thieves", studio: "Rare",price: 30},
    {title:"WOW", studio:"Blizzard",price: 120},
    {title:"Valorant", studio:"Riot",price: 0},
    {title: "COD", studio: "Activision",price: 200},
    {title: "Minecraft", studio: "Majong",price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Farming Simulator 15", studio:"Giants Software", price: 15},
    {title: "Farming Simulator 17", studio:"Giants Software", price: 60},
    {title: "Farming Simulator 19", studio:"Giants Software", price: 120},
    {title: "Farming Simulator 21", studio:"Giants Software", price: 200},
]

app.get("/",(req, res) => {
    res.json(games);
})

app.post("/novogame",(req,res)=>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame={title,studio,price}
    games.push(newGame);

   res.send("OK")
})

//att um curso

app.put('/novogame/:index',(req,res)=>{
    const{index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

     games[index]={title,studio,price};

    return res.json(games);
})


app.delete ("/:index",(req, res)=>{
    const {index} = req.params;
    games.splice(index,1);
    return res.json({messege: " O Jogo Foi Deletado "})
})


