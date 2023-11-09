//Carregando o express
//Instancio o express e carregando a biblioteca do express dentro dessa const app
import {express} from 'express';
import {colecaoGames} from './dados/dados'


app.use = (express.json());

app.listen(3080, () => {
    console.log("Servidor rodando");
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

app.get("/", (req, res) => {
    res.json(games);
});

app.get('/games', (req, res) => {
    const nomeGame = req.query.busca;
    const resultado = nomeGame ? buscarGamesPorNome(nomeGame) : colecaoGames;
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({
            "error": "Nenhum Game encontrado"
        });
    }
});

app.get('/games/:idgame', (req, res) => {
    const idgame = parseInt(req.params.idgame);
    let mensagemErro = '';
    let game;

    if (!(isNaN(idgame))) {
        game = colecaoGames.find(u => u.id === idgame);
        if (!game) {
            mensagemErro = 'Game não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }
    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});

const buscarGamesPorNome = (nomeGame) => {
    return colecaoGames.filter(uf => uf.nome.toLowerCase().includes(nomeGame.toLowerCase));
};

app.delete("/:index", (req,res)=>{
    const {index} = req.params;
    games.splice(index,1);
    return res.json({ message: "O Jogo foi deletado "});
})
