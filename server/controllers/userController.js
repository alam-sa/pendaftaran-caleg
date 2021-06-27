const { User, Candidate } = require("../models");
const { comparePassword, hashPassword } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");

class UserController {
  static register (req, res) {
    const { nama, email, password } = req.body;
    Candidate.findOne({
      where: {
        email
      }
    }).then(data => {
      if(data) throw {name: "INVALID_DATA", message: "Email Telah digunakan!" }
      return Candidate.create({
        nama,
        email
      })
    }).then(candidate => {
      return User.create({
        idUser: candidate.id,
        email,
        password
      })
    }).then(user => {
      res.status(200).json(user)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static login (req,res) {
    const { email, password } = req.body
    if(!email) throw {name: "INVALID_DATA", message: "Input Email!" }
    User.findOne({
      where: {
        email
      }
    }).then(user => {
      if(!user) throw { name: "INVALID_DATA", message: "invalid email/password" }
      if(!password) throw {name: "INVALID_DATA", message: "Password Required!" }
      const match = comparePassword(password, user.password)
      if(!match) throw { name: "INVALID_DATA", message: "invalid email/password" }
      const access_token = generateToken({ id: user.id, idUser: user.idUser, email: user.email, profilePic: user.profilePic, isAdmin: user.isAdmin })
      res.status(200).json({ email: user.email, access_token })
    
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static resetPassword(req, res) {
    const { id } = req.params
    const { newPassword } = req.body
    User.update({
      password: hashPassword(newPassword)
    },{
      where: {
        id
      }
    }).then(user => {
      res.status(201).json({ msg: "password telah diganti!", user })
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static changePassword(req, res) {
    const { id } = req.params
    const { prevPassword, newPassword } = req.body
    User.findOne({
      where: {
        id
      }
    }).then(user => {
      const match = comparePassword(prevPassword, user.password)
      if(!match) throw { name: "INVALID_DATA", message: "invalid password" }
      return User.update({ password: newPassword }, {
        where: {
          id
        }
      })
    }).then(_ => {
      res.status(201).json({msg: "password telah diubah!"})
    }).catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = UserController