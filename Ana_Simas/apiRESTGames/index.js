const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log('Servidor rodando');
})

app.post('/novogame', (req,res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    let newgame = {title,studio,price};
    games.push(newgame);
    
    res.send('OK'); //precisamos mandar uma resposta sempre para não dar timeout 
})

app.get('/', (req,res) =>{
    res.json(games);
})

app.put('/novogame/:index', (req,res) => {
    const {index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title,studio,price};

    return res.json(games);
});

app.delete('/:index', (req,res) =>{
    const{index} = req.params;
    games.splice(index,1);
    return res.json({message: 'O jogo foi deletado'});
});

const buscarPorNome = (nomeGame) => {
    return games.filter(games => games.title.toLowerCase().includes(nomeGame.toLowerCase()));
};

app.get('/busca', (req,res) => {
    const nomeGame = req.query.buscar;
    const resultado = nomeGame ? buscarPorNome(nomeGame) : games;
    if(resultado.length > 0){
        res.json(resultado);
    }else{
        res.status(404).send({"erro":"Não encontrado"});
    }
});

let games = [
    {title: 'WOW',studio: 'Blizzard', price: 'R$ 20/mes'},
    {title: 'Darkest dungeon',studio: 'Red hook studio', price: 'R$ 73.99'},
    {title: 'Bear and breakfest',studio: 'Gummy cat',  price: 'R$ 59.90'},
    {title: 'Graveyard keeper',studio: 'Lazy bear games',  price: 'R$ 59.99'},
    {title: 'My time at Portia',studio: 'Pathea',  price: 'R$ 19.90'},
    {title: 'Stardew valley',studio: 'ConcernedApe',  price: 'R$ 24.90'},
    {title: 'Unpacking',studio: 'Witch beam',  price: 'R$ 59.99'},
    {title: 'The sims 4',studio: 'EA',  price: 'Free'},
    {title: 'Diablo II',studio: 'Blizzard',  price: 'R$ 179.90'},
    {title: 'The legend of Zelda: Skyward Sword',studio: 'Nintendo',  price: 'R$ 299.99'},
]