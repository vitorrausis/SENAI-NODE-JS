const moment = require ('moment');

const time = new Date();
// Criamos um objeto Date, método nativo do JavaScript

const parsedTime = moment(time).format("h:mm:ss");
console.log(parsedTime);
