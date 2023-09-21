import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
app.get('/', (req, res) => 
res.send("<h1 style='color:blue'>Criando um servidor com Express</h1>"));

app.get('/sobre', (req, res) => 
res.send("<h1 style='color:blue'>PAGINA SOBRE</h1>"));

app.get('/contato', (req, res) => 
res.send("<h1 style='color:blue'>PAGINA CONTATO</h1>"));

app.get('/empresa', (req, res) => 
res.send("<h1 style='color:blue'>PAGINA EMPRESA</h1>"));
