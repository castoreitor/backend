/*const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clientes",
  multipleStatements: "true",
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    //return
  } else {
    console.log("Connected");
  }
});

module.exports = connection;

*/

require("dotenv").config(); // Esto debe estar al inicio del archivo
const mysql = require("mysql2");

console.log("DB_HOST:", process.env.DB_HOST); // Prueba si está cargando la variable

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: { rejectUnauthorized: true }, // Si Railway requiere SSL
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error de conexión a la base de datos:", err);
    return;
  }
  console.log("✅ Conexión exitosa a la base de datos en Railway");
});
