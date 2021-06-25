const router = require("express").Router();
const userRouter = require("./userRouter");
const candidateRouter = require("./candidateRouter");
const dataRouter = require("./dataRouter");

router.use("/", userRouter);
router.use("/candidates", candidateRouter);
router.use("/data", dataRouter);

module.exports = router;