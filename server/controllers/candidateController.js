const { Candidate } = require("../models");

class CandidateController {
  static getAll(req, res) {
    Candidate.findAll()
      .then(candidate => {
        res.status(200).json({candidate})
      }).catch(err => {
        res.status(500).json(err)
      })
  }
  static getOne(req, res) {
    const { id } = req.params
    Candidate.findOne({
      where: {
        id
      }
    })
      .then(candidate => {
        res.status(200).json({candidate})
      }).catch(err => {
        res.status(500).json(err)
      })
  }
  static updateData(req, res) {
    const { id } = req.params
    const { nama, asalPartai, nomorUrut, noHp, NIK, tempatLahir, tanggalLahir, agama, kecamatan, kelurahan, dapil } = req.body
    const tglDaftar = new Date();
    Candidate.update({nama, asalPartai, nomorUrut, noHp, NIK, tempatLahir, tanggalLahir, agama, kecamatan, kelurahan, dapil, tglDaftar }, {
      where: {
        id
      },
      returning: true
    }).then(candidate => {
      if (candidate[0] === 0) {
        throw ({ name: "NOT_FOUND", message: "Error not found" })
      }
      res.status(201).json(candidate)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static verifikasi(req, res) {
    const { id } = req.params
    const tglVerifikasi = new Date();
    Candidate.update({ tglVerifikasi }, {
      where: {
        id
      },
      returning: true
    }).then(candidate => {
      if (candidate[0] === 0) {
        throw ({ name: "NOT_FOUND", message: "Error not found" })
      }
      res.status(201).json(candidate)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static deleteData(req, res) {
    const { id } = req.params
    Candidate.destroy({
      where: {
        id
      }
    }).then(_ => {
      res.status(200).json({message: "Data kandidat berhasil dihapus"})
    }).catch(err => {
      res.status(500).json(err)
    }) 
  }
}

module.exports = CandidateController