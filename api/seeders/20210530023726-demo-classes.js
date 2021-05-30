'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Classes', [
      {
        init_date: '2020-02-01',
        level_id: 1,
        register_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        init_date: '2020-02-01',
        level_id: 2,
        register_id: 2,      
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        init_date: '2020-02-01',
        level_id: 1,
        register_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        init_date: '2020-02-01',
        level_id: 3,
        register_id: 4,
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
