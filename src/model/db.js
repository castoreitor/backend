require("dotenv").config();
const mysql = require("mysql2");

// Verifica que las variables de entorno se carguen bien
console.log("Usando DB_HOST:", process.env.DB_HOST);
console.log("Usando DB_PORT:", process.env.DB_PORT);

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: { rejectUnauthorized: false }, // 👈 Desactiva la validación del certificado
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error de conexión a la base de datos:", err);
    return;
  }
  console.log("✅ Conexión exitosa a Railway");
});
