import Express from 'Express';


const app = Express();

app.use(Express.urlencoded({ extended: true }));


app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.get('/sobre', (req, res) =>
    res.send("<h3Vamos aprender a utilizar Rotas com Express</h3><p>Rota '/sobre'")
);

app.get('/users/:name', (req, res) => {
    return res.json([name]);
});

var carros = [
    { name: "Civic", model: "Honda Civic Si", type: "Honda" },
    { name: "Clio", model: "Privilege 1.0", type: "Renault" },
    { name: "Jetta", model: "GLI 350 TSI", type: "volkswagen" },
    { name: "Passat", model: "Highline 2.0 TSI", type: "volkswagen" },
];

app.post('/cars', (req, res) => {
    let name = req.body.name;
    let model = req.body.model;
    let type = req.body.type;

    carros[(carros.length)] = name;

    return res.json([carros[(carros.length - 1)]]);
});

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null;
    return res.json(carros[id]);
});

app.listen(8080, () =>
    console.log('Servidor iniciado na porta 8080')
);