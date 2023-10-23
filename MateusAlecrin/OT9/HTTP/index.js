import Express from 'express';
const app = Express();

var carros = [
    {name:'Saveiro',    marca:'VW',             preco: 1500.99},
    {name:'Toyota',     marca:'Hilux',          preco: 2599.99},
    {name:'HB20',       marca:'Hyundai',        preco: 8999.99},
    {name:'March',      marca:'Nissan',         preco: 6799.99},
    {name:'Toro' ,      marca:'Fiat',           preco: 12199.99},
    {name:'Lancer',     marca:'Mitsubisch',     preco: 10299.39},
];

app.use(Express.urlencoded({ extended: true}));

app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express </h3><p>Rota '/'")
);

app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express</p>")
);

app.get('/users/:name', (req, res) => {
    let name = req.params.name;
    return res.json({ name });
});

app.get('/cars', (req, res) => {
    return res.json(carros);
});

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    let marca = req.body.marca;
    let preco = req.body.preco;

    let newCarro = {name, marca, preco}
    carros.push(newCarro);
    return res.json([carros[(carros.length -1)]]);
});

app.put('/cars/:id', (req, res) => {
    let name = req.body.name;
    let marca = req.body.marca;
    let preco = req.body.preco;

    carros[req.params.id] = {name, marca, preco};
    return res.json(carros[req.params.id]);
});

app.delete('/cars/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null;
    return res.json(carros[id]);
});

app.listen(3000, () =>
    console.log('Servidor iniciado na porta 3000')
);




