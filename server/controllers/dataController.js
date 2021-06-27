const { Kecamatan, Kelurahan, Partai, Dapil} = require("../models");

class DataController {
  static addKecamatan(req, res) {
    const { namaKec } = req.body
    Kecamatan.create({namaKec})
    .then(kecamatan => {
      res.status(201).json(kecamatan)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static getKecData(req,res) {
    const { id } = req.params
    Kecamatan.findOne({
      where: {
        id
      },
      include: [
        {model: Kelurahan, as: Kelurahan.namaKel}
    ]
    }).then(kecamatan => {
      res.status(200).json({kecamatan})
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static addKelurahan(req, res) {
    const { namaKel, namaKec } = req.body
    Kecamatan.findOne({
      where: {
        namaKec
      }
    })
    .then(kecamatan => {
      return Kelurahan.create({ KecamatanId: kecamatan.id, namaKel})
    }).then(kelurahan => {
      res.status(201).json({kelurahan})
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static getKelData(req,res) {
    const { id } = req.params
    Kelurahan.findOne({
      where: {
        id
      }
    }).then(kelurahan => {
      res.status(200).json({kelurahan})
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  static getAllPartai(req, res) {
    Partai.findAll()
      .then(partai => {
        res.status(200).json({partai})
      }).catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = DataController