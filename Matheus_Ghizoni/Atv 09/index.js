import express from 'express';

const app = express();

var carros = [
    {name: "Celta", color: "Preto", price: 15000},
    {name: "Onix", color: "Branco", price: 15000},
    {name: "Saveiro", color: "Vermelho", price: 15000},
    {name: "Gol", color: "Preto", price: 30000},
    {name: "Gol", color: "Branco", price: 30000},
    {name: "Gol", color: "Cinza", price: 30000}
];

app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express")
);

// app.get('/users/:name', (req, res) =>
//     res.send('Usuário:' = req.params.name)
// );

app.use(express.urlencoded({ extended: true }));

app.post('/cars/', (req,res) => {
    let name = req.body.name;
    let color = req.body.color;
    let price = req.body.price;

    let newCar = {name, color, price}

    carros.push(newCar);
    return res.json([carros[(carros.length - 1)]]);
});

app.put('/cars/edit/:index', (req,res) => {
    const { index } = req.params;
    let name = req.body.name;
    let color = req.body.color;
    let price = req.body.price;

    carros[index] = { name, color, price };

    return res.json(carros[index]);
})

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null;
    return res.json(carros[id]);
});

app.listen(3000, () =>
    console.log('Servidor iniciado na porta 3000')
);