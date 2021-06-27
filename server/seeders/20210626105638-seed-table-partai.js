'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Partais', [
       {
        namaPartai: "Partai Kebangkitan Bangsa",
        alias: "PKB",
        gambar: "public/partai/Logo_PKB_2019.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       }, 
       {
        namaPartai: "Partai Gerakan Indonesia Raya",
        alias: "GERINDRA",
        gambar: "public/partai/Logo_Gerindra_2019v2.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Demokrasi Indonesia Perjuangan",
        alias: "PDIP",
        gambar: "public/partai/Logo_PDIP_2019v2.jpeg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Golongan Karya",
        alias: "GOLKAR",
        gambar: "public/partai/Logo_Golkar_2019v2.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Nasional Demokrat",
        alias: "NASDEM",
        gambar: "public/partai/Logo_Nasdem_2019v3.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Gerakan Perubahan Indonesia",
        alias: "GARUDA",
        gambar: "public/partai/Logo_Garuda_2019v2.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Beringin Karya",
        alias: "BERKARYA",
        gambar: "public/partai/Logo_Berkarya_2019v2",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Keadilan Sejahtera",
        alias: "PKS",
        gambar: "public/partai/Logo_PKS_2019.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Persatuan Indonesia",
        alias: "PERINDO",
        gambar: "public/partai/Logo_Perindo_2019v2.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Persatuan Pembangunan",
        alias: "PPP",
        gambar: "public/partai/Logo_PPP_2019v2.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Solidaritas Indonesia",
        alias: "PSI",
        gambar: "public/partai/Logo_PSI_2019.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Amanat Nasional",
        alias: "PAN",
        gambar: "public/partai/Logo_PAN_2019.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Hati Nurani Rakyat",
        alias: "HANURA",
        gambar: "public/partai/Logo_Hanura_2019v2.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Demokrat",
        alias: "DEMOKRAT",
        gambar: "public/partai/Logo_Demokrat_2019v2.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Bulan Bintang",
        alias: "PBB",
        gambar: "public/partai/Logo_PBB_2019.jpeg",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        namaPartai: "Partai Keadilan dan Persatuan Indonesia",
        alias: "PKPI",
        gambar: "public/partai/Logo_PKPI_2019.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
       }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Partais', null, {});
  }
};
