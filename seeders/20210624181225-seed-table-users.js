'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        idUser: 1,
         email: 'admin@gmail.com',
         password: 'admin123',
         profilePic: '',
         isAdmin: true,
         createdAt: new Date(),
         updatedAt: new Date()
       }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
