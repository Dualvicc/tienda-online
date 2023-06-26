'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Admin',
        email: 'dualvic@gmail.com',
        password: '$2a$12$c6kgy060ZyKXpJD9RE59xO74VlYa2B4wTpor.gb3hBKgrpMs9sjv.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pages', null, {});
  }
};