'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Candidate.hasOne(models.Upload,{foreignKey: 'idKandidat', as: 'uploads', onDelete: 'CASCADE'})
      Candidate.hasOne(models.User,{foreignKey: 'idUser', as: 'users', onDelete: 'CASCADE'})
    }
  };
  Candidate.init({
    nama: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input nama anda!'
       } 
      }
    },
    asalPartai: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input asal partai!'
       } 
      }
    },
    nomorUrut: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'input nomor urut!'
        },
        isNumeric: {
          args: true,
          msg: 'Masukkan angka!'
        }
      }
    },
    noHp: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input no HP!'
       } 
      }
    },
    NIK: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'NIK yang anda masukkan telah digunakan'
      },
      validate: {
       notEmpty: {
         args: true,
         msg: 'Masukkan NIK anda!'
       },
       len: {
         args: [16],
         msg: "NIK anda salah!"
       }
      }
    },
    tempatLahir: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input tempat lahir anda!'
       } 
      }
    },
    tanggalLahir: {
      type: DataTypes.DATE,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input tanggal lahir anda!'
       } 
      }
    },
    agama: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input agama anda!'
       } 
      }
    },
    kecamatan: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input Kecamatan!'
       } 
      }
    },
    kelurahan: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input Kelurahan!'
       } 
      }
    },
    dapil: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'input Dapil!'
       } 
      }
    },
    tglDaftar: DataTypes.DATE,
    tglVerifikasi: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};