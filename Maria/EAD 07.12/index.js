const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let tasks = ["passear com o dog", "ir ao mercado", "comprar pão"];

app.get("/", (req, res) => {
    res.render("index", { tasksList: tasks });
});

app.post("/", (req, res) => {
    tasks.push(req.body.tarefa);
    res.render("index", { tasksList: tasks });
});

app.get("/deletar/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < tasks.length) {
        tasks.splice(id, 1);
    }
    res.redirect('/');
});

app.listen(5001, () => {
    console.log("Servidor rodando em http://localhost:5001");
});