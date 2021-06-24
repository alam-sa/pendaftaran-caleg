'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dapil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dapil.init({
    kodeDapil: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Masukkan kode Dapil!'
        }
      }
    },
    kec: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.TEXT),
      validate: {
        notEmpty: {
          args: true,
          msg: 'Masukkan Kecamatan!'
        }
      }
    },
    namaDapil: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Masukkan nama Dapil!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Dapil',
  });
  return Dapil;
};