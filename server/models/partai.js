'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Partai.init({
    namaPartai: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Data partai sudah ada!"
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input nama partai!'
        }
      }
    },
    alias: DataTypes.STRING,
    gambar: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input gambar partai!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Partai',
  });
  return Partai;
};