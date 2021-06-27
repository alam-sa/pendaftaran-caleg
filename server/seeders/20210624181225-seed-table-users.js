'use strict';

const { hashPassword } = require("../helper/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        idUser: 1,
         email: 'admin@gmail.com',
         password: hashPassword('admin123'),
         profilePic: '/public/admin/admin.png',
         isAdmin: true,
         createdAt: new Date(),
         updatedAt: new Date()
       }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
