require('dotenv').config();
const msyql = require("mysql2")

const connection = msyql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL (Producción)");
});

module.exports = connection;


/* ENV
PORT=3001
DB_HOST=50.116.27.100
DB_USER=gfxbydes_userx
DB_PASS=CV025@@
DB_NAME=gfxbydes_CV

*/
