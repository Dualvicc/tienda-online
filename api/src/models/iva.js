module.exports = function (sequelize, DataTypes) {
    const Iva = sequelize.define('Iva', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      vigente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      multiplicador: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'ivas',
      timestamps: true,
      paranoid: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
      ]
    })
  
    Iva.associate = function (models) {
      Iva.hasMany(models.Precio, { as: 'IvaPrecio', foreignKey: 'iva_id' })
    }
  
    return Iva
  }
  