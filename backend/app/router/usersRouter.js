// Dans le dossier "routes/usersRoutes.js"

const express = require("express");
const usersController = require("../controllers/usersController");
const auth = require("../middleware/auth");

const router = express.Router();

// Routes pour les utilisateurs
router.get("/users", auth.checkToken, usersController.getAllUsers);
router.get("/users/:id", auth.checkToken, usersController.getUserById);
router.post("/users", auth.checkToken, usersController.createUser);
router.put("/users/:id", auth.checkToken, usersController.updateUser);
router.delete("/users/:id", auth.checkToken, usersController.deleteUser);

module.exports = router;
