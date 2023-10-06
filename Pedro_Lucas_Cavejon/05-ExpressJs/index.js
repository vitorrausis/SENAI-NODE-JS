import express from 'express';

const app = express();

app.listen(3000, () =>
    console.log('Servidor rodando na porta 3000')
);

app.get('/', (req,res) =>
    res.send('<h1 class="color: blue">Criando um servidor com express.js</h1>')
);

app.get('/sobre', (req,res) =>
    res.send('<h1 class="color: blue">Página sobre.js</h1>')
);

app.get('/contato', (req,res) =>
    res.send('<h1 class="color: blue">Página contato</h1>')
);