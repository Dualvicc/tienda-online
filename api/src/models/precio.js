module.exports = function (sequelize, DataTypes) {
    const Precio = sequelize.define('Precio', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      producto_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Producto',
            key: 'id'
          }
        
      },
      iva_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Iva',
            key: 'id'
          }
      },
      precio_base: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vigente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      sequelize,
      tableName: 'precios',
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
  
    Precio.associate = function (models) {
      Precio.belongsTo(models.Producto, { as: 'PrecioProducto', foreignKey: 'producto_id' }),
      Precio.belongsTo(models.Iva, { as: 'PrecioIva', foreignKey: 'iva_id' })
    }
  
    return Precio
  }
  