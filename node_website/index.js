import express from 'express';
import path from 'path';
import http from 'http';

const app = express();

app.use(express.json());
app.use(express.static('express'));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
});

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.debug('Server inicializado na porta ' + port);
    console.log("http://localhost:3000");
});