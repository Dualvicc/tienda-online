'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('image_resizes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      imageOriginalId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      imageConfigurationId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      alt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      entity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      entityKey: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      languageAlias: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mimeType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      grid: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sizeBytes: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      widthPx: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      heightPx: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      quality: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('image_resizes');
  }
};