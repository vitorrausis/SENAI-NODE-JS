const sh = require('superheroes');
const chalk = require('chalk');

console.log(chalk.green(sh.random()));

const moment = require('moment');
const time = new Date();
const parsedTime = moment(time).format('h:mm:ss');
console.log(chalk.yellow(parsedTime));