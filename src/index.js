const express = require("express");
const cors = require("cors");
const clienteRoutes = require("./routes/routesClientes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", clienteRoutes); // Asegúrate que el prefijo es correcto

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
