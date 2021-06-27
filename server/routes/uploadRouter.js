const router = require("express").Router();
const UploadController = require("../controllers/uploadController");
const auth = require("../middlewares/auth");
const { multipleUpload } = require("../helper/multerHelper")

router.use(auth);
router.get("/", UploadController.findAll);
router.get("/:id", UploadController.findOne);
router.post("/", multipleUpload, UploadController.addUpload);

module.exports = router;