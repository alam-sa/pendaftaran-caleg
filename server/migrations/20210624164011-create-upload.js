'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Uploads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idKandidat: {
        type: Sequelize.INTEGER,
        unique: true,
        references: { model: 'Candidates', key: 'id' },
        onDelete: 'CASCADE'
      },
      formBB1: {
        type: Sequelize.STRING
      },
      formBB2: {
        type: Sequelize.STRING
      },
      ektp: {
        type: Sequelize.STRING
      },
      ijazah: {
        type: Sequelize.STRING
      },
      skck: {
        type: Sequelize.STRING
      },
      sehatJasmani: {
        type: Sequelize.STRING
      },
      sehatRohani: {
        type: Sequelize.STRING
      },
      suketBnn: {
        type: Sequelize.STRING
      },
      suketPidana: {
        type: Sequelize.STRING
      },
      pasFoto: {
        type: Sequelize.STRING
      },
      suketPps: {
        type: Sequelize.STRING
      },
      ktaPartai: {
        type: Sequelize.STRING
      },
      suketPartai: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Uploads');
  }
};