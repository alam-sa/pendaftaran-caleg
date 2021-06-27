const { Upload, User } = require("../models");

class UploadController {
  static findAll(req, res) {
    const isAdmin = req.decoded.isAdmin
    Upload.findAll()
    .then(uploads => {
      if(!isAdmin) throw {name: "NOT_AUTORIZED", msg: "Tidak dapat diakses!"}
      res.status(200).json(uploads)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static findOne(req, res) {
    const idUser = req.decoded.idUser
    Upload.findOne({
      where: {
        idUser
      }
    }).then(user => {
      res.status(200).json(user)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static addUpload(req, res) {
    const idKandidat = req.decoded.idUser
    let obj = {
      formBB1: "", formBB2: "", ektp: "", ijazah: "", skck: "", sehatJasmani: "", sehatRohani: "",
      suketBnn: "", suketPidana: "", pasFoto: "", suketPps: "", ktaPartai: "", suketPartai: ""
    }

    for (const key in req.files) {
      if (obj.hasOwnProperty.call(req.files, key)) {
        obj[key]  = req.files[key][0].path
      }
    }
    User.update({profilePic: obj.pasFoto}, {
      where: {
        idUser: idKandidat,
        isAdmin: false
      }
    }).then(_ => {
      return Upload.create({
        idKandidat, formBB1: obj.formBB1, formBB2: obj.formBB2, ektp: obj.ektp,ijazah:obj.ijazah, skck: obj.skck,
        sehatRohani: obj.sehatRohani, sehatJasmani: obj.sehatJasmani, suketBnn: obj.suketBnn, suketPidana: obj.suketPidana,
        pasFoto: obj.pasFoto, suketPps: obj.suketPps, ktaPartai: obj.ktaPartai, suketPartai: obj.suketPartai
      })
    }).then(upload => {
      res.status(201).json(upload)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = UploadController