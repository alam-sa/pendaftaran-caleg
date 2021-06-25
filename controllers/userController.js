const { User, Candidate } = require("../models");
const { comparePassword } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");

class UserController {
  static register (req, res) {
    const { nama, email, password } = req.body;
    Candidate.create({
      nama
    }).then(candidate => {
      console.log(candidate.id);
      return User.create({
        idUser: candidate.id,
        email,
        password
      })
    }).then(user => {
      res.status(200).json(user)
    }).catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
  }
  static login (req,res) {
    const { email, password } = req.body
    if(!email) throw {name: "INVALID_DATA", message: "Email Required!" }
    User.findOne({
      where: {
        email
      }
    }).then(user => {
      // console.log(user);
      if(!user) throw { name: "INVALID_DATA", message: "invalid email/password" }
      if(!password) throw {name: "INVALID_DATA", message: "Password Required!" }
      const match = comparePassword(password, user.password)
      if(!match) throw { name: "INVALID_DATA", message: "invalid email/password" }
      const access_token = generateToken({ id: user.id, idUser: user.idUser, email: user.email, profilePic: user.profilePic })
      res.status(200).json({ email: user.email, access_token })
    
    }).catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = UserController