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

const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Asegúrate de que esta variable es correcta
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306, // Usa el puerto 3306 por defecto
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;
