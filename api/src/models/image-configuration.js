module.exports = function(sequelize, DataTypes) {
    const ImageConfiguration = sequelize.define('ImageConfiguration', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      entity: {
        type: DataTypes.STRING,
        allowNull: false
      },
      directory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      },
      grid: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['desktop', 'mobile', 'preview']]
        }
      },
      contentAccepted: {
        type: DataTypes.STRING,
        allowNull: false
      },
      extensionConversion: {
        type: DataTypes.STRING(4),
        allowNull: false
      },
      widthPx: {
        type: DataTypes.INTEGER.UNSIGNED
      },
      heightPx: {
        type: DataTypes.INTEGER.UNSIGNED
      },
      quality: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
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
  
    return ImageConfiguration;
  };
  