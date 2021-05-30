'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Levels', [
      {
        level: 'Básico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: 'Intermediário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
