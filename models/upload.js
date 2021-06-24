'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Upload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  Upload.init({
    idKandidat: DataTypes.INTEGER,
    formBB1: DataTypes.STRING,
    formBB2: DataTypes.STRING,
    ektp: DataTypes.STRING,
    ijazah: DataTypes.STRING,
    skck: DataTypes.STRING,
    sehatJasmani: DataTypes.STRING,
    sehatRohani: DataTypes.STRING,
    suketBnn: DataTypes.STRING,
    suketPidana: DataTypes.STRING,
    pasFoto: DataTypes.STRING,
    suketPps: DataTypes.STRING,
    ktaPartai: DataTypes.STRING,
    suketPartai: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Upload',
  });
  return Upload;
};