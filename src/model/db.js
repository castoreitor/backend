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

const connection = mysql.createConnection(process.env.MYSQL_URL);

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
  } else {
    console.log("Conectado a la base de datos en Railway.");
  }
});

module.exports = connection;
