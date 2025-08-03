const msyql = require("mysql2")

const connection = msyql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado a MySQL Correctamente !!!")
})

module.exports = connection;
