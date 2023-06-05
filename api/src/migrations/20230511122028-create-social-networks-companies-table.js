'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('social_networks_companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Company',
          key: 'id'
        }
      },
      socialNetworkId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'SocialNetwork',
          key: 'id'
        }
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
    })
    .then(() => queryInterface.addIndex('social_networks_companies', ['companyId'],{
      name: 'socialNetworksCompany_companyId_fk'
    }))
    .then(() => queryInterface.addIndex('social_networks_companies', ['socialNetworkId'],{
      name: 'socialNetworksCompany_socialNetworkId_fk'
    }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('social_networks_companies')
  }
}
