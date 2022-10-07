// const express = require("express");
// const app = express();
// const port = 3000;
// const mysql = require("mysql2");

// app.use(express.json());

// // ROTAS
// app.get("/", (req, res) => res.json({ message: "Funcionando!" }));

// // Get / SELECT
// app.get('/clientes/:id?', (req, res) => {
//     let filter = '';
//     if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
//     execSQLQuery('SELECT * FROM Clientes' + filter, res);
// })

// // Delete / DELETE
// app.delete('/clientes/:id', (req, res) =>{
//     execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
// })

// // Inserir / POST
// app.post('/clientes', (req, res) => {
//     const nome = req.body.nome.substring(0,150);
//     const cpf = req.body.cpf.substring(0,11);
//     execSQLQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
// });

// // Atualizar / PATCH
// app.patch('/clientes/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const nome = req.body.nome.substring(0,150);
//     const cpf = req.body.cpf.substring(0,11);
//     execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
// })

// app.listen(port);
// console.log("API funcionando!");

// function execSQLQuery(sqlQry, res) {
//   const connection = mysql.createConnection({
//     host: "0.0.0.0",
//     port: 3306,
//     user: "root",
//     password: "root",
//     database: "teste_db",
//   });

//   connection.query(sqlQry, (error, results, fields) => {
//     if (error) res.json(error);
//     else res.json(results);
//     connection.end();
//     console.log("executou!");
//   });
// }
