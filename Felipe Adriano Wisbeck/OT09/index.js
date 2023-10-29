//Rota Tipo GEt
import Express from 'Express';

const app = Express();

var carros = ['fiesta', 'Saveiro'];

app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Rota'/'")
);

app.get("/sobre", (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos Aprender a Utilizar rotas com Express"));

app.get('/users/:name', (req, res) => {
    return res.json([name]);
});

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros[(carros.lenght)] = name;

    return res.json([carros[(carros.lenght - 1)]]);
});

//Rota tipo Post
app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.put('/cars/update/id:', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;

    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null;//deletar item

    return res.json(carros[id]);
});

app.listen(3000, () =>
    console.log("Servidor iniciando na porta 3000")
);
