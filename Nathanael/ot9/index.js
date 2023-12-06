import Express from 'express';

const app = Express();


var carros = [ ];

app.use(Express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send("<h3>Rotas no express</h3><p>Rota '/'")
});

app.get('/sobre', (req, res) => {
    res.send('<h1> Rotas no express</h1><h3>Vamos aprende a utilizar Rotas com Express</h3>')
});

app.get('/users/:name', (req, res) => {
    res.send('Usuário:' + req.params.name)
});


app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]]);
});

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]]);
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

app.listen(3000, () => {
    console.log('servidor inicado na porta 3000')
});
