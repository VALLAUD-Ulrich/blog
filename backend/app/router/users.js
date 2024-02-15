const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.post("/", usersController.create);
router.get("/:email", usersController.findOneByEmail);
router.get("/", usersController.findAll);
router.get("/role/:id", usersController.findUserByRole);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);

module.exports = router;
