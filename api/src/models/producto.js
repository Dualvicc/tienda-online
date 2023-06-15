module.exports = function (sequelize, DataTypes) {
    const Producto = sequelize.define('Producto', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ProductoCategoria',
            key: 'id'
          }
      },
      visible: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      sequelize,
      tableName: 'productos',
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
  
    Producto.associate = function (models) {
      Producto.belongsTo(models.ProductoCategoria, { as: 'CategoriaProducto', foreignKey: 'categoria_id' }),
      Producto.hasOne(models.Precio, { as: 'PrecioProducto', foreignKey: 'producto_id' })
    }
  
    return Producto
  }
  