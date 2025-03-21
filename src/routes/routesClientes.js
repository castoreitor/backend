const express = require("express");

const clienteController = require("../controllers/clientes.js").default;
const productoController = require("../controllers/producto.js").default;

class routeCliente {
  constructor() {
    this.ruta = express.Router();
    this.config();
  }

  config() {
    this.ruta.post("/login", clienteController.login);
    this.ruta.post("/crear", clienteController.createCliente);
    this.ruta.get("/consultaProducto", productoController.getProducto);
    this.ruta.get("/consultar2/:ID_producto", productoController.getProductoI);
    this.ruta.post("/crearProducto", productoController.createProducto);
    this.ruta.put("/editar", productoController.updateProducto);
    this.ruta.delete("/borrar", productoController.deleteProducto);
  }
}

exports.default = routeCliente;
