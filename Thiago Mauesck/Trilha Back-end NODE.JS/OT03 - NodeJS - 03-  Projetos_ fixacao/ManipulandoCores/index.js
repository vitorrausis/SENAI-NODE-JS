var clc = require('cli-color');
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;

var msg = clc.xterm(202).bgXterm(236);

console.log(msg("Orange text on dark gray background"));

console.log(clc.green("Mensagem verde;"));
console.log(clc.red('Mensagem vermelha;'));
console.log(clc.blue('Menssagem azul;'));
console.log(clc.yellow('Menssagem amarela;'));
console.log(clc.red('Texto em vermelho'));
console.log(clc.red.bgWhite.underline('Texto em vermelho com fundo branco'));
console.log(clc.red('red')+'plain'+clc.blue('blue'));
console.log(clc.red('vermelho '+clc.blue('azul')+' vermelho'));

console.log(error('Error!'));
console.log(warn("warning!"));
console.log(notice("Notice."));

process.stdout.write(
    clc.columns([
        [clc.bold('Primeiro Nome'), clc.bold('Ultimo Nome'), clc.bold('Idade')],
        ['Zé', 'Ramalho', 79],
        ['Juju', 'Dopix', 31],
        ['Carlos', 'Uchoinnnnn', 29]
    ])
);