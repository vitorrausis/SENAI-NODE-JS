const sh = require('superheroes');
const chalk = require('chalk');
const moment = require('moment');

const time = new Date();
const parsedTime = moment(time).format("h:mm:ss");
console.log(chalk.blue(parsedTime));
console.log(chalk.red.inverse(sh.random()));
