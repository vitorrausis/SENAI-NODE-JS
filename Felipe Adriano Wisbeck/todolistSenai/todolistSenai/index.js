const express = require('express');
var bodyParser = require('body-parser'); //483.9k(gzipped:211.2k)
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderfile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(_dirname, 'public')));
app.set('views', path.join(_dirname, '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extend: true
}));
/*app.get('/', (req, res) => {
    res.render('index', { nome: "FoxyNewGames" });
});
No Index.html <h2>Olá <%= nome %>!</h2>
*/

let tasks = ['Passear com o Dog', 'Ir ao mercado', 'Comprar pão'];

app.post('/', (req, res) => {
    tasks.posh(req.body.task);
    res.render('index', { taskList: tasks });
});

//Altereração no Delete
app.get('/deletar/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (Number.isInteger(id) && id >= 0 && id < tasks.length) {
        tasks.splice(id, 1);
    }

    res.redirect('/');
});

//Continuacao do codigo da OT


app.listen(5000, () => {
    console.log('Servidor Rodando em http://localhost:5000');
})