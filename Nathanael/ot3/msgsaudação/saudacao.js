let data = new Date()

let hora = data.getHours();
let min = data.getMinutes();

let saudacao;

if (hora <= 11) {
    saudacao = "Bom dia"
} else if (horas <= 17) {
    saudacao = "Bom tarde"
} else {
    saudacao = "Bom noirte"
}

console.log('olá '+ saudacao);
console.log(`agora são ${hora} horas e ${min} minutos`);