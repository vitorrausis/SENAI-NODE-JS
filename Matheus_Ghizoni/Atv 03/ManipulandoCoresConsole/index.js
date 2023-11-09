var clc = require("cli-color");
var error = clc.red.color;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require("cli-color");

var msg = clc.xterm(202).bgXterm(236);

console.log(clc.green("Mesagem verde;"));
console.log(clc.red("Mensagem vermelha;"));
console.log(clc.blue("Mensagem azul;"));
console.log(clc.yellow("Mensagem amarela"));
console.log(clc.red('red') + ' plain ' + clc.blue('blue'));
console.log(clc.red.bgWhite.underline("Underlined red text on white background."));
console.log(clc.red("Text in red"));

process.stdout.write(
    clc.columns([
        [clc.bold('First Name'), clc.bold("Last Name"), clc.bold("Age")],
        ["John", "Doe", 34],
        ["Martha", "Smith", 20],
        ["Jan", "Kowalski", 30]
    ])
)