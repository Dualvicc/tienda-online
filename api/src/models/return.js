module.exports = function(sequelize, DataTypes) {
    const Returns = sequelize.define('Returns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      saleId: {
        type: DataTypes.INTEGER
      },
      customerId: {
        type: DataTypes.INTEGER
      },
      paymentMethodId: {
        type: DataTypes.INTEGER
      },
      reference: {
        allowNull: false,
        type: DataTypes.STRING
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      },
      totalBasePrice: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      },
      totalTaxPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      },
      issueDate: {
        allowNull: false,
        type: DataTypes.DATEONLY
      },
      issueTime: {
        allowNull: false,
        type: DataTypes.TIME
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
      tableName: 'returns',
      timestamps: true,
      paranoid: true,
      indexes: []
    });
  
    Returns.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
    };
  
    return Returns;
  };
  