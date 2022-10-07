const express = require("express");
const app = express();
const port = 3000;
const service = require('./service')

app.use(express.json());

// ROTAS
app.get("/", (req, res) => res.json({ message: "Funcionando!" }));

// Get / SELECT
app.get('/eventos/:id?', (req, res) => {
  service.getEventoPorId(req, res);
})

// Delete / DELETE
app.delete('/eventos/:id', (req, res) =>{
  service.deletePorId(req, res);
  res.status(204);
})

// Inserir / POST
app.post('/clientes', (req, res) => {
  service.postEvento(req, res);
  res.status(201)
});

// Atualizar / PATCH
app.patch('/eventos/:id', (req, res) => {
  service.update(req, res)
})

app.listen(port);
console.log("API funcionando!");


