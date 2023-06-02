module.exports = function(sequelize, DataTypes) {
  const Image = sequelize.define('Image', {
      id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
      },
      imageConfigurationId: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      entityId: {
          type: DataTypes.INTEGER
      },
      entity: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: {
                  msg: 'Por favor, rellena el campo "Entity".'
              }
          }
      },
      name: {
          type: DataTypes.STRING
      },
      originalFilename: {
          type: DataTypes.STRING
      },
      resizedFilename: {
          type: DataTypes.STRING
      },
      title: {
          type: DataTypes.STRING
      },
      alt: {
          type: DataTypes.STRING
      },
      languageAlias: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: {
                  msg: 'Por favor, rellena el campo "Language Alias".'
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
      latencyMs: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              notNull: {
                  msg: 'Por favor, rellena el campo "Latency Ms".'
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
      tableName: 'images',
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
          name: "imageConfigurations_imageConfigurationId_foreignKey",
          unique: true,
          using: "BTREE",
          fields: [
              { name: "imageConfigurationId" },
          ]
      },
      {
          name: "entities_entityId_foreignKey",
          unique: true,
          using: "BTREE",
          fields: [
              { name: "entityId" },
          ]
      },
      ]
  });

  Image.associate = function(models) {
    Image.belongsTo(models.ImageConfiguration, {as:'imageConfiguration', foreignKey: 'imageConfigurationId' });
  };

  return Image;
};
