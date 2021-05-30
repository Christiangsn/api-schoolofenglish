'use strict';

const { getMaxListeners } = require("..");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Students', [
    {
      name: 'Christian Guimarães',
      active: true,
      email: 'christian@gmail.com',
      password: '123456',
      role: 'Estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Luis Souza',
      active: true,
      email: 'luis@gmail.com',
      password: '123456',
      role: 'Estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juliana Damasceno',
      active: true,
      email: 'juju@gmail.com',
      password: '123456',
      role: 'Estudante',
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
