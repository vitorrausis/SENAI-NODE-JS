import { Express } from "express";

const app = express();

app.listen(3000, () => 
    console.log('Servidor na porta 3000')
);

app.get('/', (req, res) => 
    res.send('<h1 style="color: blue"> Criando um servidor com Express </h1> ')
);

app.get('/sobre', (req, res) => 
    res.send('<h1 style="color: blue"> Página sobre </h1> ')
);

app.get('/contato', (req, res) => 
    res.send('<h1 style="color: blue"> Página contato </h1> ')
);

app.get('/empresa', (req, res) => 
    res.send('<h1 style="color: blue"> Página empresa </h1> ')
);