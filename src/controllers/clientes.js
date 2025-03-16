const db = require("../model/db.js");

const clienteController = {
  // 🔹 Login de cliente
  login: async (req, res) => {
    const { Correo_electronico, contraseña } = req.body;

    try {
      const [rows] = await db.query(
        "SELECT COUNT(*) AS sum FROM cliente WHERE Correo_electronico = ? AND contraseña = ?",
        [Correo_electronico, contraseña]
      );

      if (rows[0].sum === 0) {
        return res.status(400).json({ Error: "No existe" });
      }
      res.status(200).json({ Exito: "Existe" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: "Error en el servidor" });
    }
  },

  // 🔹 Login con nivel de acceso
  loginnivel: async (req, res) => {
    const { Correo_electronico, contraseña } = req.body;

    try {
      const [rows] = await db.query(
        "SELECT Correo_electronico FROM cliente WHERE Correo_electronico = ? AND contraseña = ?",
        [Correo_electronico, contraseña]
      );

      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(400).json({ "ERROR DATOS": "El usuario no existe" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: "Error en el servidor" });
    }
  },

  // 🔹 Crear un nuevo cliente
  createCliente: async (req, res) => {
    const {
      ID_Cliente,
      Nombre,
      Apellido,
      Correo_electronico,
      Telefono,
      Contraseña,
    } = req.body;

    try {
      await db.query(
        "INSERT INTO cliente (ID_Cliente, Nombre, Apellido, Correo_electronico, Telefono, Contraseña) VALUES (?, ?, ?, ?, ?, ?)",
        [ID_Cliente, Nombre, Apellido, Correo_electronico, Telefono, Contraseña]
      );

      res.status(201).json({ Exito: "Usuario Creado" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: "Error en el servidor" });
    }
  },

  // 🔹 Obtener todos los clientes
  getClientes: async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM cliente");
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: "Error en el servidor" });
    }
  },

  // 🔹 Obtener cliente por ID
  getClientesId: async (req, res) => {
    const { ID_Cliente } = req.params;

    try {
      const [rows] = await db.query(
        "SELECT * FROM cliente WHERE ID_Cliente = ?",
        [ID_Cliente]
      );

      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(400).json({ "No encontrado": "El usuario no existe" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: "Error en el servidor" });
    }
  },
};

module.exports = clienteController;
