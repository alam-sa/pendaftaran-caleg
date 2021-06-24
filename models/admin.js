'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Admin.init({
    nama: {
      type: DataTypes.STRING,
      validate: {
       notEmpty: {
         args: true,
         msg: 'Input nama anda!'
       } 
      }
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};