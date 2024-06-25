const clienteService = require('../services/clienteService');

async function crearCliente(req, res) {
  try {
    const cliente = await clienteService.crearCliente(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function obtenerClientes(req, res) {
  try {
    const clientes = await clienteService.obtenerClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function actualizarCliente(req, res) {
  try {
    const cliente = await clienteService.actualizarCliente(req.params.id, req.body);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function borrarCliente(req, res) {
  try {
    await clienteService.eliminarCliente(req.params.id);
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  crearCliente,
  obtenerClientes,
  actualizarCliente,
  borrarCliente,
};
