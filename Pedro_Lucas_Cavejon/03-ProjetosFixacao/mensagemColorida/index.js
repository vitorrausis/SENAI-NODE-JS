var clc = require("cli-color");
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require("cli-color");

var msg = clc.xterm(202).bgXterm(236);

console.log(msg("Orange text on dark gray brackgroud"));

console.log(clc.green("Mensagem verde;"));
console.log(clc.red("Mensagem vermelha;"));
console.log(clc.blue("Mensagem azul;"));
console.log(clc.yellow("Mensagem amarela;"));
console.log(clc.red("vermelho " + clc.blue("azul")+ "Vermelho"));
console.log(clc.red("vermelho")+"plain"+clc.blue("Azul"));
console.log(clc.red.bgWhite.underline("A linha pontilhada com o texto em vermelho e fundo branco"));
console.log(clc.red("texto em vermelho"));

console.log(error("Error!"));
console.log(warn("Warning!"));
console.log(notice("Notice!"));

process.stdout.write(
    clc.columns([
        [clc.bold("Primeiro Nome"), clc.bold("Ultimo nome"), clc.bold("Idade")],
        ["John", "Doe", 34],
        ["John", "Doe", 34],
        ["John", "Doe", 34]
    ])
);