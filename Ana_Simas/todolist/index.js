const express = require('express');
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'/views'));

let tasks = ['Passear com o cat', 'Ir ao mercado', 'Terminar as OTs de Node']

app.get('/',(req,res) =>{
    res.render('index',{tasksList: tasks});
});

app.listen(5000, () =>{
    console.log('servidor rodando em http://localhost:5000');
});