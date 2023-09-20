const sh = require("superheroes");
const chalk = require("chalk");

//console.log(sh.random());
console.log(chalk.blue(sh.random()));


/*
O package.json é o coração de qualquer projeto do Node.js. É nele que temos o
registro de todas as dependências (os pacotes do NPM) e os metadados de cada
projeto.

Se outra pessoa baixar o projeto, este arquivo vai ajudá-lo a instalar todas as
dependências necessárias para executar o programa.
*/