const express = require('express');
const app = express();
app.use(express.json());

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
const buscaGamePorNome = (nameGame) => {
    return games.filter((game) => game.title.toLocaleLowerCase().includes(nameGame.toLocaleLowerCase()));
}
app.get('/', (req, res) => {
    const nameGame = req.query.busca;
    result = nameGame ? buscaGamePorNome(nameGame) : games;
    if(result.length>0){
        res.send(result);
    }else{
        res.status(404).send("Game not found");
    }
})

app.post('/newgame', (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;
    
    console.log(title);
    console.log(studio)
    console.log(price)

    games.push({title:title, studio:studio, price:price});

    res.send(games);
    res.send("OK");

});
app.put('/newgame/:index', (req, res) => {
    const{index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;
    // let game = games.find(g => g.title == title);
    // game.studio = studio;
    // game.price = price;
    games[index] = {title,studio,price}
    res.send(games);
});

app.delete('/newgame/:index', (req, res) => {
    const{index} = req.params;
    games.splice(index,1);
    res.send({message:"Game was deleted!"});
});