module.exports = function(sequelize, DataTypes) {
    const OriginalImage = sequelize.define('OriginalImage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      path: {
        allowNull: false,
        type: DataTypes.STRING
      },
      entity: {
        allowNull: false,
        type: DataTypes.STRING
      },
      entityKey: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      languageAlias: {
        allowNull: false,
        type: DataTypes.CHAR(2)
      },
      filename: {
        allowNull: false,
        type: DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      mimeType: {
        allowNull: false,
        type: DataTypes.STRING
      },
      sizeBytes: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
      widthPx: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
      heightPx: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
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
      tableName: 'original_images',
      timestamps: true,
      paranoid: true,
      indexes: []
    });
  
    OriginalImage.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
    };
  
    return OriginalImage;
  };
  