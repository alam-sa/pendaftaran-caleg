'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Candidates', [{
      nama: 'Andi Samsualam',
      asalPartai: 'Golkar',
      nomorUrut: 1,
      noHp: '08221235',
      NIK: '37532948694666',
      tempatLahir: 'Kapidi',
      tanggalLahir: '11-09-1995',
      agama: 'Islam',
      kecamatan: 'Somba Opu',
      kelurahan: 'Samata',
      dapil: 'GOWA 1',
      tglDaftar: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Candidates', null, {});
  }
};
