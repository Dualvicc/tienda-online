module.exports = function(sequelize, DataTypes) {
    const Tax = sequelize.define('Tax', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      vatRate: {
        type: DataTypes.INTEGER(2),
        unsigned: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Vat Rate".'
          }
        }
      },
      valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
      tableName: 'taxes',
      timestamps: true,
      paranoid: true,
      indexes: []
    });

    Tax.associate = function(models) {
    };
  
    return Tax;
  };
  