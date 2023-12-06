import Express from "express";

const app = Express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("<h3>Rotas no Express</h3><p>Rota '/'");
});

app.get("/sobre", (req, res) => {
  res.send(
    "<h3>Rotas no Express</h3><p>Vamos aprender a utilizar rotas com Express"
    );
  });
  
app.get("/users/:name", (req, res) => res.send("Usuário:" + req.params.name));
  
var carros = [
  {name:"Gol",model:"2014",price:"RS40.000"},
  {name:"Saveiro",model:"2011",price:"RS65.000"},
  {name:"Celta",model:"2004",price:"RS9.000"},
  {name:"Fusca",model:"1600 78",price:"RS12.000"},
  {name:"Ônix",model:"2016",price:"RS60.000"},
  {name:"Mercedes",model:"1113",price:"RS65.000"},
  {name:"Compass",model:"2020",price:"RS150.000"},
  {name:"Strada",model:"Adventure 2014",price:"RS50.000"},
  {name:"Golf",model:"1999",price:"RS45.000"},
  {name:"Polo",model:"2024",price:"RS110.000"},
  {name:"Fox",model:"2009",price:"RS29.000"},
];
app.use(Express.urlencoded({extended: true}));

app.get("/cars/", (req, res) => {
  res.json([carros]);
});
app.get("/cars/:id", (req, res) => {
  let id = req.params.id;
  res.json([carros[id]]);
});

app.post("/cars", (req, res) => {
  let name = req.body.name;
  let model = req.body.model;
  let price = req.body.price;
  carros.push({name, model,price});
  return res.json([carros[(carros.length-1)]]);
});

app.put("/cars/:id", (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let model = req.body.model;
  let price = req.body.price;
  carros[id] = {name, model, price};
  return res.json([carros[id]]);
})

app.delete("/cars/:id", (req, res) => {
  let id = req.params.id;
  carros.splice(id, 1);
  return res.json(carros);
})
