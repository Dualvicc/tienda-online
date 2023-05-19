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
        type: DataTypes.INTEGER
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
      indexes: []
    });
  
    Fingerprint.associate = function(models) {

    };
  
    return Fingerprint;
  };
  