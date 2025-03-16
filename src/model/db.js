require("dotenv").config();
const mysql = require("mysql2");

// Verifica que las variables de entorno se carguen bien
console.log("Usando DB_HOST:", process.env.MYSQL_HOST);
console.log("Usando DB_PORT:", process.env.MYSQL_PORT);

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_NAME,
  port: process.env.MYSQL_PORT || 3306,
  connectTimeout: 20000,
  ssl: { rejectUnauthorized: false }, // 👈 Desactiva la validación del certificado
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error de conexión a la base de datos:", err);
    return;
  }
  console.log("✅ Conexión exitosa a Railway");
});
