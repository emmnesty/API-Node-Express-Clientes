const mysql = require("mysql2");

connection = (query, res) => {
  const cnnx = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'teste_db'
  });

  cnnx.query(query, (error, results, fields) => {
      if (error)
          res.json(error);
      else
          res.json(results);
      
  })
};

module.exports = { connection }