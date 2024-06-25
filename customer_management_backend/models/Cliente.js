module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('clientes', {
      nit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      razon_social: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      usuario_creador: {
        type: DataTypes.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id',
        },
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,  
    });
  
    return Cliente;
  };
  