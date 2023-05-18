'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageConfigurationId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      entityId: {
        type: Sequelize.INTEGER
      },
      entity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      originalFilename: {
        type: Sequelize.STRING
      },
      resizedFilename: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      alt: {
        type: Sequelize.STRING
      },
      languageAlias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mediaQuery: {
        type: Sequelize.STRING,
        allowNull: false
      },
      latencyMs: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('images');
  }
};