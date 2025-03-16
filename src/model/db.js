require("dotenv").config();
const mysql = require("mysql2");

// Verifica que las variables de entorno se carguen bien
console.log(" Conectando a la base de datos en:", process.env.MYSQL_HOST);
console.log(" Usando el puerto:", process.env.MYSQL_PORT || 3306);

const db = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_NAME,
    port: process.env.MYSQL_PORT || 3306,
    ssl: { rejectUnauthorized: false }, // 👈 Desactiva la validación del certificado
  })
  .promise();

// Prueba de conexión
db.query("SELECT 1")
  .then(() => console.log(" Conexión exitosa a la base de datos."))
  .catch((err) => console.error(" Error de conexión a la base de datos:", err));

module.exports = db; // Exportamos la conexión con promesas
