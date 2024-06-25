const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/crear', clienteController.crearCliente);
router.get('/consultar', clienteController.obtenerClientes);
router.put('/actualizar/:id', clienteController.actualizarCliente);
router.delete('/borrar/:id', clienteController.borrarCliente);

module.exports = router;
