var clc = require("cli-color");

var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;

var msg = clc.xterm(202).bgXterm(236);

console.log(msg("Texto laranja com o fundo em cinza escuro"));

console.log(clc.green("Mensagem apresentada em verde;"));
console.log(clc.red("Mensagem apresentada em vermelho;"));
console.log(clc.blue("Mensagem apresentada em azul;"));
console.log(clc.yellow("Mensagem apresentada em amarelo;"));
console.log(clc.red("red " + clc.blue("blue ") + " red"));
console.log(clc.red("red") + " plain " + clc.blue("blue"));
console.log(clc.red.bgWhite.underline("Texto vermelho sublinhado com fundo branco"));
console.log(clc.red("Texto em vermelho"));

console.log(error("Erro!"));
console.log(warn("Atenção!")); // Era "warning", troquei para "warn"
console.log(notice("Notificação!"));

console.log(
    clc.columns([
        [clc.bold("Nome"), clc.bold("Sobrenome"), clc.bold("Idade")],
        ["John", "Doe", 34],
        ["Martha", "Smith", 20],
        ["Jan", "Kowalski", 30]
    ])
);