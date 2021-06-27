const router = require("express").Router();
const UserController = require("../controllers/userController")

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.patch("/users/:id/reset", UserController.resetPassword);
router.patch("/users/:id/change", UserController.changePassword);


module.exports = router