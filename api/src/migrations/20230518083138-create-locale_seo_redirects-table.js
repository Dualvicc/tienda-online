'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locale_seo_redirects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      localeSeoId: {
        type: Sequelize.INTEGER
      },
      language: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.STRING
      },
      subdomain: {
        type: Sequelize.STRING
      },
      oldUrl: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('locale_seo_redirects');
  }
};