import Express from 'express';

const app = Express();

const carros_nome = ['Golf Mk1','Camaro','Mustang II','Uno','Corsa','Kadet']
const carros_marca=['Volkswagem','Chevrolet','Ford','Fiat','Chevrolet','Chevrolet']
const carros_valor = ['10000','30000','40000','50000','60000','70000']

   
app.use(Express.urlencoded({extended:true}));

app.get('/',(req,res)=>
res.send("<h3> Rota no Express</h3><p>Rota '/'")
);

app.get('/sobre',(req,res)=>
res.send('"<h3> Rota no Express</h3><p> Vamos aprender a utilizar a Rotas Com Express')
);

app.get('/users/:name',(req,res)=> {
    return res.json([name]);   
});

app.post('/cars/',(req,res)=>{
    let name = req.body.name;
    let marca = req.body.marca;
    let valor =req.body.valor;

    carros_nome[(carros_nome.length)]= name;
    carros_marca[(carros_marca.length)]= marca;
    carros_valor[(carros_valor.length)] = valor
    
    return res.json([carros_nome[(carros_nome.length-1)],carros_marca[carros_marca.length-1],carros_valor[carros_valor.length-1],])

})

app.get('/cars/:id',(req,res)=>{
    let id= req.params.id;
    return res.json([carros_nome[id],carros_marca[id],carros_valor[id]])
})

app.put('/cars/update/:id',(req,res)=>{
    let name = req.body.name;
    let marca = req.body.marca;
    let valor = req.body.valor;

    carros_nome[req.params.id]=name
    carros_marca[req.params.id]=marca
    carros_valor[req.params.id]=valor
    
    return res.json([carros_nome[req.params.id],carros_marca[req.params.id],carros_valor[req.params.id]]);
});

app.delete('/cars/delete/:id',(req,res)=>{
    let id= req.params.id;
    carros_nome[id]=null;
    carros_marca[id]=null;
    carros_valor[id] = null
    return res.json([carros_nome[id],carros_marca[id],carros_valor[id]]);
})

app.listen(3000,()=>
console.log('Servidor iniciado na porta 3000')
);
