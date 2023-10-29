//instanciamos o objeto date
let data = new Date();

//utilizaremos a instancia para recuperar a hora e os minutos...
let hora = data.getHours();
let min = data.getMinutes();

let saudacao;
//definimos a mensagem de saudadacao de acordo com a hora do dia...

if (hora < -11) {
    saudacao = `Bom dia!`

} else if (hora < -17) {
    saudacao = `Boa Tarde!`
} else {
    saudacao = `Boa noite!`
}

console.log(`ola ` + saudacao);
console.log(`Agora sao ` + hora + ` horas e` + min + `minutos.`);