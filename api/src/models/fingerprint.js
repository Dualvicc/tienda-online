module.exports = function(sequelize, DataTypes) {
  const Fingerprint = sequelize.define('Fingerprint', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "customerId".'
        }
      },
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    fingerprint: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Fingerprint".'
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
  }, {
    sequelize,
    tableName: 'fingerprints',
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
    ]
  });

  Fingerprint.associate = function(models) {
    Fingerprint.belongsTo(models.Customer, {as: 'customer', foreignKey: 'customerId' });
  };

  return Fingerprint;
};
