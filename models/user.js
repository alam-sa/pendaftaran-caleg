'use strict';

const { hashPassword } = require('../helper/bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    idUser: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email telah digunakan!'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Input Password!"
        },
        len: {
          args: [6],
          msg: "Password minimal 6 karakter!"
        }
      }
    },
    profilePic: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password);
      }
    }
  });
  return User;
};