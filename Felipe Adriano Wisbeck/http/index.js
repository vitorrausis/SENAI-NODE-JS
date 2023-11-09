import express from 'express';
const app = express();
app.listen(3000,()=>console.log('Servidor Iniciado na porta 3000')); 

app.get('/' ,(req,res)=>
res.send('<h1 style="color:blue" > criando um servidor com express.js </h1>' )
);