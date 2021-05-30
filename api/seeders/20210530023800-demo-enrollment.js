'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Enrollments', [
      {
        status: 'Confirmado',
        student_id: 1,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Confirmado',
        student_id: 2,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Confirmado',
        student_id: 3,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Confirmado',
        student_id: 4,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
    Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
