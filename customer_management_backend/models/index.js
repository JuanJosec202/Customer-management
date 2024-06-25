const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  
  }
);


const Cliente = require('./Cliente')(sequelize, DataTypes);
const Usuario = require('./Usuario')(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  models: {
    Cliente,
    Usuario,
  },
};

module.exports = db;
