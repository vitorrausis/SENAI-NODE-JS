const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const carros = [
    { nome: 'Fiesta', preco: 25000, marca: 'Ford' },
    { nome: 'Saveiro', preco: 30000, marca: 'Volkswagen' },
    { nome: 'Civic', preco: 35000, marca: 'Honda' },
    { nome: 'Corolla', preco: 40000, marca: 'Toyota' },
    { nome: 'Gol', preco: 28000, marca: 'Volkswagen' },
    { nome: 'Focus', preco: 27000, marca: 'Ford' }
];

app.get('/', (req, res) => res.json(carros));

app.post('/cars', (req, res) => {
    const { nome, preco, marca } = req.body;
    const novoCarro = { nome, preco, marca };
    carros.push(novoCarro);
    return res.json(novoCarro);
});

app.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < carros.length) {
        return res.json(carros[id]);
    } else {
        res.status(404).json({ message: 'Carro não encontrado.' });
    }
});

app.put('/cars/update/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < carros.length) {
        const { nome, preco, marca } = req.body;
        carros[id] = { nome, preco, marca };
        return res.json(carros[id]);
    } else {
        res.status(404).json({ message: 'Carro não encontrado.' });
    }
});

app.delete('/cars/delete/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < carros.length) {
        carros.splice(id, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Carro não encontrado.' });
    }
});

app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));