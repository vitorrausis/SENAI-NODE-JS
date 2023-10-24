import Express from 'express';
const app = Express ();

//{title:"Sea of Thieves", studio: "Rare", price: 30},
var carros = [{title:'fiesta', marca: "ford", price: "61.668,00"},
{title:'saveiro', marca: "volkswagen", price: "95.770,00"},
{title:'march', marca: "nissan", price: "66.849,00"},
{title:'gol', marca: "volkswagen", price: "78.160,00"},
{title:'onix', marca: "chevrolet", price: "82,490,00"},
{title:'celta', marca: "chevrolet", price: "28,120,00"},
{title:'pegeout 208', marca: "psa", price: "75.990,00"},
{title:'prisma', marca: "chevrolet", price: "87.590,00"},
]

app.use(Express.urlencoded({ extended: true}));

app.get('/', (req, res) => 
res.send ("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar rotas com express"));

app.get('/users:name', (req, res) =>{ 
    return res.json([name]);
});


app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json ([carros[(carros.length - 1)]])

});

app.listen(3000, () => 
console.log('http://localhost:3000'));

app.put('/cars/update/:id', (req, res) => {
    let name=req.body.name;
    carros [req.params.id] = name;
    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null;
    return res.json(carros[id]);
});