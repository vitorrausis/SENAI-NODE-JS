var clc = require("cli-color");
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require("cli-color");

var msg = clc.xterm(202).bgXterm(236);
console.log(msg("orange text on dark gray background"));

console.log(clc.green("Mensagem Verde;"));
console.log(clc.red("Mensagem red;"));
console.log(clc.blue("Mensagem blue;"));
console.log(clc.yellow("Mensagem yellow;"));

console.log(clc.red("text in red"));
console.log(clc.red.bgwhite.underline("underline red text on white background."));
console.log(clc.red(`red`) + `plain` + clc.blue(`blue`));
console.log(clc.red(red + clc.blue('blue') + ' red'));

console.log(error("Error!;"));
console.log(warn("Warning;"));
console.log(notice("Notice;"));

Process.stdout.write(
    clc.columns([
        [clc.bold("first Name"), clc.bold("Last Name"), clc.bold("Age")],
        ["John", "Doe", 34],
        ["Marthe", "Smith", 20]
        ["Jan", "kowalski", 30]
    ]));