// Dans le dossier "routes/rolesRoutes.js"

const express = require("express");
const rolesController = require("../controllers/rolesController");
const auth = require("../middleware/auth");

const router = express.Router();

// Routes pour les rôles
router.get("/roles", auth.checkToken, rolesController.getAllRoles);
router.get("/roles/:id", auth.checkToken, rolesController.getRoleById);
router.post("/roles", auth.checkToken, rolesController.createRole);
router.put("/roles/:id", auth.checkToken, rolesController.updateRole);
router.delete("/roles/:id", auth.checkToken, rolesController.deleteRole);

module.exports = router;
