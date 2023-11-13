var clc = require("cli-color");
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require("cli-color");

var msg = clc.xterm(202).bgXterm(236);

console.log(msg("Orange text on dark gray background") );
console.log(clc.green("Mensagem verde;"));
console.log(clc.red("Mensagem red;"));
console.log(clc.blue("Mensagem blue;"));
console.log(clc.yellow("Mensagem yellow;"));
console.log(clc.red("red " + clc.blue("blue") + " red"));
console.log(clc.red("red") + " plain " + clc.blue("blue"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background."));
console.log(clc.red("Text in red"));

console.log(error("Error!"));
console.log(warn("Warning"));
console.log(notice("Notice"));q

process.stdout.write(
    clc.columns([
        [clc.bold('Frist name', clc.bold('Last name'),clc.bold('Age'))]
        ['Jhon','Doe,',34],
        ['Martha','Swmith',20],
        ['Jan','Kowalski',30]
    ])
);