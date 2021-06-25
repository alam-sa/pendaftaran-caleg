const router = require("express").Router();
const CandidateController = require("../controllers/candidateController");

router.get("/", CandidateController.getAll);
router.get("/:id", CandidateController.getOne);
router.put("/:id", CandidateController.updateData);
router.delete("/:id", CandidateController.deleteData);

module.exports = router