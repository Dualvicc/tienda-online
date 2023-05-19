module.exports = function(sequelize, DataTypes) {
    const SaleError = sequelize.define('SaleError', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      paymentMethodId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      errorCode: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      errorMessage: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'sale_errors',
      timestamps: true,
      paranoid: true,
      indexes: []
    });
  
    SaleError.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
    };
  
    return SaleError;
  };
  