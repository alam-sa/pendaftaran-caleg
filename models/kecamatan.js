'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kecamatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kecamatan.hasMany(models.Kelurahan)
    }
  };
  Kecamatan.init({
    namaKec: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input nama Kecamatan!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Kecamatan',
  });
  return Kecamatan;
};