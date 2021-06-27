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
    namaDapil: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Masukkan nama Dapil!'
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
    }
  }, {
    sequelize,
    modelName: 'Dapil',
  });
  return Dapil;
};