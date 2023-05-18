module.exports = function(sequelize, DataTypes) {
  const ImageConfiguration = sequelize.define('ImageConfiguration', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      entity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor, rellena el campo "Entidad".'
            }
        }
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
    mediaQuery: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor, rellena el campo "Media Query".'
            }
        }
    },
      widthPx: {
          type: DataTypes.INTEGER
      },
      heightPx: {
          type: DataTypes.INTEGER
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
      tableName: 'image_configurations',
      timestamps: true,
      paranoid: true,
      indexes: []
  });

  ImageConfiguration.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
  };

  return ImageConfiguration;
};