module.exports = function(sequelize, DataTypes) {
    const Cart = sequelize.define('Cart', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
      fingerprintId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Fingerprint',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'carts',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "customers_customerId_foreignKey",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "customerId" },
          ]
        },
        {
          name: "fingerprints_fingerprintId_foreignKey",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "fingerprintId" },
          ]
        },
      ]
    });
  
    Cart.associate = function(models) {
        Cart.hasOne(models.CartDetail, {as: 'cartDetails', foreignKey: 'cartId'});
        Cart.belongsTo(models.Customer, {as: 'customer', foreignKey: 'customerId'});
        Cart.belongsTo(models.Fingerprint, {as: 'fingerprint', foreignKey: 'fingerprintId'});
        Cart.hasOne(models. SaleError, {as:'saleError', foreignKey: 'cartId' });
        Cart.hasOne(models.Sale, {as:'sale', foreignKey: 'cartId' });


      };
  
    return Cart;
  };
  