
const express = require('express');
const bodyParser = require('body-parser');
const clientesRoutes = require('./routes/clientes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/clientes', clientesRoutes);

module.exports = app;