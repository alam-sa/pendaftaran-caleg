const router = require("express").Router();
const userRouter = require("./userRouter");
const candidateRouter = require("./candidateRouter");
const dataRouter = require("./dataRouter");
const uploadRouter = require("./uploadRouter");

router.use("/", userRouter);
router.use("/candidates", candidateRouter);
router.use("/data", dataRouter);
router.use("/upload", uploadRouter);

module.exports = router;