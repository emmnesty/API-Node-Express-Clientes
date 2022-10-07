const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "0.0.0.0",
  port: 3306,
  user: "root",
  password: "root",
  database: "teste_db",
});

connection.connect((err) => {
  if (err) return console.log(err);
  console.log("conectou!");
  createTable(connection);
});

function createTable(conn) {
  const sql = `CREATE TABLE IF NOT EXISTS Clientes(
                     ID int NOT NULL AUTO_INCREMENT,
                     Nome varchar(150) NOT NULL,
                     CPF char(11) NOT NULL,
                     PRIMARY KEY (ID)
                     );`;

  conn.query(sql, (error, results, fields) => {
    if (error) return console.log(error);
    console.log("criou a tabela!");
  });

  // const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
  // const values = [
  //       ['teste1', '12345678901'],
  //       ['teste2', '09876543210'],
  //       ['teste3', '12312312399']
  //     ];
  // conn.query(sql, [values], (error, results, fields) => {
  //         if(error) return console.log(error);
  //         console.log('adicionou registros!');
  //         conn.end();//fecha a conexão
  //     });
}
