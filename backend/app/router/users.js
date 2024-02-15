const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.post("/", usersController.create);
router.get("/", usersController.findAll);
router.get("/:role_id", usersController.findUserByRole);
router.patch("/:id", usersController.update);
router.delete("/:id", usersController.delete);

module.exports = router;
