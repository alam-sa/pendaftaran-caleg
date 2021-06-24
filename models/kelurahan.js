'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelurahan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kelurahan.belongsTo(models.Kecamatan)
    }
  };
  Kelurahan.init({
    idKec: DataTypes.INTEGER,
    namaKel: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input nama Kelurahan!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Kelurahan',
  });
  return Kelurahan;
};