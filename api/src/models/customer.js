module.exports = function(sequelize, DataTypes) {
    const Customer = sequelize.define('Customer', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Nombre".'
          }
        }
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Apellido".'
          }
        }
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Teléfono".'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Email".'
          },
          isEmail: {
            msg: 'Por favor, rellena el campo "Email" con un email válido.'
          }
        }
      },
      town: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Localidad".'
          }
        }
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Código Postal".'
          }
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Dirección".'
          }
        }
      }
    }, {
      sequelize,
      tableName: 'customers',
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
      name: "email",
      unique: true,
      using: "BTREE",
      fields: [
          { name: "email" },
      ]
  },
    ]
    });
  
    Customer.associate = function(models) {
      Customer.hasMany(models.Cart, {as:'cart', foreignKey: 'customerId' })
      Customer.hasOne(models.Fingerprint, {as: 'fingerprint', foreignKey: 'fingerprintId'});
      Customer.hasMany(models.Return, {as:'return',  foreignKey: 'customerId' });
      Customer.hasMany(models.SaleError, {as:'saleError', foreignKey: 'customerId' });
      Customer.hasMany(models.Sale, {as:'sale', foreignKey: 'customerId' });
      Customer.hasMany(models.SentEmail, {as:'sentEmail', foreignKey: 'customerId' });
    };
  
    return Customer;
  };
  