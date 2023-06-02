module.exports = function(sequelize, DataTypes) {
  const CartDetail = sequelize.define('CartDetail', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa el nombre del producto.'
          }
        }
      },
      basePrice: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa el precio base.'
          }
        }
      },
      taxPrice: {
        type: DataTypes.DECIMAL(6, 2)
      },
      unitOfMeasurement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa la unidad de medida.'
          }
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa la cantidad.'
          }
        }
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'CartDetail',
      tableName: 'cart_details',
      timestamps: true,
      paranoid: true,
      indexes: [],
    }
  );

  Cart.associate = function(models) {
    // Define las asociaciones con otros modelos aquí
  };
  
  return CartDetail;
};
