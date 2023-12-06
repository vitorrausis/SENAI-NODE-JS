const express = require('express');
var bodyParse = require('body-parser')
const path = require('path');
const app = express();


app.engine('html', require('ejs').renderFile); /*11.4k (gzipped: 4.3k)*/
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.use( bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}))


let tasks = ['Passear com o Dog','Ir ao Mercado', 'Comprar Pão'];

app.post('/',(req,res)=>{
    tasks.push(req.body.task);
    res.render('index',{tasksList: tasks});
})

app.get('/', (req, res) => {
    res.render('index', {tasksList: tasks});
});

app.get('/deletar/:id',(req,res)=>{
    tasks= tasks.filter(function(val,index){
        if(index !=req.params.id){
            return val;
        }
    })
    res.render('index',{tasksList:tasks})
});

app.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000');
})

