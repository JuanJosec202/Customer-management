
const db = require('../models');

async function obtenerClientes() {
  try {
    const clientes = await db.models.Cliente.findAll(); 
    return clientes;
  } catch (error) {
    throw new Error('Error al obtener clientes: ' + error.message);
  }
}

async function crearCliente(datosCliente) {
  console.log('****Cliente***** '+datosCliente)
  const cliente = await db.models.Cliente.create(datosCliente);
  return cliente;
}

async function actualizarCliente(idCliente, datosActualizados) {
  const cliente = await db.models.Cliente.findByPk(idCliente);
  if (!cliente) {
    throw new Error('Cliente no encontrado');
  }
  await cliente.update(datosActualizados);
  return cliente;
}

async function eliminarCliente(idCliente) {
  const cliente = await db.models.Cliente.findByPk(idCliente);
  if (!cliente) {
    throw new Error('Cliente no encontrado');
  }
  await cliente.destroy();
}

module.exports = {
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};