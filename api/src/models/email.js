module.exports = function(sequelize, DataTypes) {
    const Email = sequelize.define('Email', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      subject: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "subject".'
          }
        }
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "content".'
          }
        }
      }
    }, {
      sequelize,
      tableName: 'emails',
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

      ]
    });
  
    Email.associate = function(models) {
      Email.hasOne(models.SentEmail, {as:'sentEmail', foreignKey: 'emailId' });

      };
  
    return Email;
  };
  