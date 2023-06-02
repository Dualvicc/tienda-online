module.exports = function(sequelize, DataTypes) {
  const SentEmail = sequelize.define('SentEmail', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    emailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "emailId".'
        }
      },
      references: {
        model: 'Email',
        key: 'id'
      }
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
    tableName: 'sent_emails',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" }
        ]
      },
      {
        name: "customers_customerId_foreignkey",
        using: "BTREE",
        fields: [
          { name: "customerId" }
        ]
      },
      {
        name: "emails_emailId_foreignkey",
        using: "BTREE",
        fields: [
          { name: "emailId" }
        ]
      }
    ]
  });

  SentEmail.associate = function(models) {
    // Define las asociaciones con otros modelos aquí
    SentEmail.belongsTo(models.Customer, { foreignKey: 'customerId' });
    SentEmail.belongsTo(models.Email, { foreignKey: 'emailId' });
  };

  return SentEmail;
};