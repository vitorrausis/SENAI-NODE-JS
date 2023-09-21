//Instanciamos o objeto Date..
let data = new Date();

//Utilizamos a instancia para recuperar a hora e os minutos..
let hora = data.getHours();
let min  = data.getMinutes();

let saudacao;
//Definimos a msg de saudação de acordo com a hora do dia

if(hora <= 11){
    saudacao = "Bom dia!";
}else if(hora <= 17){
    saudacao = "Boa Tarde!";
}else{
    saudacao= "Boa Noite!";
}

console.log('Olá! '+saudacao);
console.log('Agora são '+hora+'horas e '+min+ 'minutos');