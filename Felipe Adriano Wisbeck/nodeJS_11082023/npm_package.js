const sh = require(superheroes);
console.log(chalk.blue(sh.random()));

const moment = require(moment);
const time = new Date();
const parsedTime = moment(time).format("h:mm:ss");
console.log(parsedTime);