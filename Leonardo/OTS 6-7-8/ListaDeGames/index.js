//carregando express
const express = require("express");
//instanciando o express e carregando a biblioteca do express dentro da const app
const app = express();

app.use(express.json());


//Lista de Games

let games = [
    {title: "Sea of Java", studio: "Java", price: 30},
    {title: "NPW", studio: "IronCore", price: 120},
    {title: "LOL", studio: "Riot", price: 0},
    {title: "COD MW III", studio: "Sledgehammer", price: 300},
    {title: "Tibia", studio: "Cipsoft", price: 80},
    {title: "GTA V", studio: "Rockstar Games", price: 90},
    {title: "EA FC 24", studio: "EA", price: 350},
    {title: "Need for Speed 2015", studio: "Ghost", price: 80},
    {title: "Counter Strike 2", studio: "Valve", price: 0},
    {title: "COD BO2", studio: "Treyarch", price: 200}
]

app.listen(3080,()=> {
    console.log("Servidor Rodando!.");
})

app.get("/", (req, res) => {
    res.json(games);
})

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price}
    games.push(newGame);
    res.send("OK");
});

app.put('/novogame/:index', (req, res) =>{
    const {index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, studio, price};

    return res.json(games);
})

app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    games.splice(index, 1);
    return res.json({message: "O jogo foi deletado"});
})

/*

1. O que é Node.js e por que é popular no desenvolvimento web?
Node.js: Um ambiente de execução que permite rodar JavaScript fora dos navegadores, 
construído no motor V8 do Chrome. 
O Node.js é popular no desenvolvimento web porque:

Permite o uso de JavaScript no frontend e backend.
Oferece alto desempenho para tarefas I/O através de sua natureza não bloqueante.
Tem um vasto ecossistema com o npm, facilitando a extensão.
Suporta desenvolvimento rápido e escalável, ideal para aplicações modernas.
Beneficia-se de uma comunidade ativa e adesão de grandes empresas.


2. Qual é a diferença entre o Node.js e outras tecnologias de servidor, como o
Apache?

Ambos podem ser usados para servir conteúdo na web, o Node.js é uma plataforma 
de execução versátil para JavaScript, e o Apache é um servidor web tradicional 
com um foco em servir páginas. Suas diferenças arquitetônicas os tornam mais
adequados para diferentes tipos de tarefas e cargas de trabalho.

3. Como você inicia um projeto Node.js usando o npm?
npm init -y

4. O que é o Express.js e qual é o seu papel no desenvolvimento web com
Node.js?
Express.js é um framework para Node.js que facilita a criação de aplicações 
web e APIs. Ele fornece ferramentas para roteamento, manipulação de
requisições e respostas, e integração com middlewares. Express simplifica
e acelera o desenvolvimento no Node.js, tornando-se a escolha popular para 
muitos desenvolvedores web.

5. Explique o conceito de middleware no contexto do Express.js.

No Express.js, um middleware é uma função que tem acesso aos objetos de 
requisição, resposta e à próxima função middleware no ciclo de 
requisição/resposta. Eles são usados para executar código específico, 
modificar requisições e respostas, ou terminar o ciclo de requisição/resposta.
Middlewares são fundamentais na arquitetura do Express, permitindo modulação
e extensibilidade.

6. Como você roteia solicitações HTTP em um aplicativo Express?

Iniciar um aplicativo com const app = express().
Definir rotas usando métodos como app.get(), app.post(), e outros.
Capturar valores dinâmicos usando parâmetros, como /users/:userId.
O servidor responde às solicitações conforme as rotas definidas.
Iniciar o servidor com app.listen().


7. O que é o middleware de análise de corpo (body-parser) e por que é útil em
um aplicativo Express?


O middleware body-parser é uma biblioteca que ajuda a interpretar o corpo das requisições
HTTP em formatos utilizáveis no Express.js. Ele:
Analisa corpos de requisições entrantes em formatos como JSON e URL-encoded.
Popula o objeto req.body com o resultado da análise.
Facilita a manipulação de dados POST enviados por formulários ou clientes.
É crucial para APIs e aplicativos que recebem dados via HTTP POST.
Embora já estivesse separado, versões recentes do Express incorporaram essa 
funcionalidade diretamente.



8. Quais são os principais métodos HTTP e como eles são usados em rotas
Express?

Os principais métodos HTTP e seus usos em rotas Express são:
GET: Recupera recursos; app.get('/path', callback).
POST: Envia dados para serem processados; app.post('/path', callback).
PUT: Atualiza recursos existentes; app.put('/path', callback).
DELETE: Remove recursos; app.delete('/path', callback).
PATCH: Modifica parte de um recurso; app.patch('/path', callback).

9. Como você lida com erros em um aplicativo Express?
Manipulando com a extensão Thunder Clients
10.O que é uma API RESTful e como o Express pode ser usado para criar uma?

API RESTful refere-se a uma interface que segue os princípios da arquitetura REST,
 permitindo a interação entre sistemas via padrões HTTP. No Express.js:
Crie rotas para manipular métodos HTTP (GET, POST, PUT, DELETE).
Use respostas e solicitações para trocar dados, geralmente em JSON.
O middleware e as rotas no Express facilitam a implementação de endpoints RESTful.
Garanta a statelessness, tratando cada requisição de forma independente.
Beneficie-se da modularidade e extensibilidade do Express para criar uma API robusta.
*/