const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log('Servidor rodando');
})

app.post('/novocarro', (req,res) => {
    let modelo = req.body.modelo;
    let fabricante = req.body.fabricante;
    let ano = req.body.ano;

    let newcar = {modelo,fabricante,ano};
    carros.push(newcar);
    
    res.send('OK'); //precisamos mandar uma resposta sempre para não dar timeout 
})

app.get('/', (req,res) =>{
    res.json(carros);
})

app.put('/novocarro/:index', (req,res) => {
    const {index} = req.params;
    let modelo = req.body.modelo;
    let fabricante = req.body.fabricante;
    let ano = req.body.ano;

    carros[index] = {modelo,fabricante,ano};

    return res.json(carros);
});

app.delete('/:index', (req,res) =>{
    const{index} = req.params;
    carros.splice(index,1);
    return res.json({message: 'O carro foi deletado'});
});

let carros = [
    {modelo: 'Monza',fabricante: 'Chevrolet', ano: '1989'},
    {modelo: 'Gol',fabricante: 'VW', ano: '1989'},
    {modelo: 'Golf',fabricante: 'VW', ano: '2012'},
    {modelo: 'Megane',fabricante: 'Renault', ano: '2002'},
    {modelo: 'S10',fabricante: 'Chevrolet', ano: '2020'},
    {modelo: 'Fusca',fabricante: 'VW', ano: '1965'}
]