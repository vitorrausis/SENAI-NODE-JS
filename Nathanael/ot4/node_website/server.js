const http = require('http');
const express = require('express');
const path = requeire('path');

const app = express();
app.use(express.json());
app.use(express.static('express'));

//url padrão do site

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.log('Server inicializado na porta '+port);