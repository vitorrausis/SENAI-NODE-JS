const express = require('express');
var bodyParser = require('body-parser');// processar os corpos das requisições HTTP
const path = require('path'); //é um módulo para lidar com caminhos de arquivos e diretórios.
const app = express();

app.engine('html', require('ejs').renderFile);// permite a renderização para a visualização de arquivos HTML.
app.set('view engine', 'html');// permite a renderização para a visualização de arquivos HTML.
app.use('/public',express.static(path.join(__dirname, 'public')));// Essa linha configura o Express para servir arquivos estáticos (como CSS, JavaScript, imagens) 
app.set('views', path.join(__dirname, '/views'));//Isso define o diretório onde o Express procurará por arquivos de visualização. Neste caso, está configurado para o diretório 'views'.

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
/*Essas linhas configuram o body-parser para processar os corpos das requisições HTTP. 
O primeiro trata corpos de requisições no formato JSON, e o segundo lida com dados de formulários HTML codificados.*/

app.post('/',(req,res)=>{
    tasks.push(req.body.task);
    res.render('index',{tasksList: tasks});
})


let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar pão'];

app.get('/', (req, res)=> {
    res.render('index',{tasksList: tasks});
});

app.get('/deletar/:id',(req,res)=> {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < tasks.length) {
        tasks.splice(id, 1);
        //Remove o item do array na posição do ID
    }
    res.redirect('/');
});

app.listen(5000,()=>{
    console.log('Servidor rodando em http://localhost:5000');
})