const router = require("express").Router();
const DataController = require("../controllers/dataController");

router.get("/kecamatan/:id", DataController.getKecData);
router.post("/kecamatan", DataController.addKecamatan);
router.get("/kelurahan/:id", DataController.getKelData)
router.post("/kelurahan", DataController.addKelurahan)

module.exports = router;