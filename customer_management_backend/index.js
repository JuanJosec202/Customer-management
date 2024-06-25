const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const clientesRoutes = require('./routes/clientes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/clientes', clientesRoutes);

// Iniciar el servidor
db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });