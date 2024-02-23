// Dans le dossier "routes/categoriesRoutes.js"

const express = require("express");
const categoriesController = require("../controllers/categoriesController");
const auth = require("../middleware/auth");

const router = express.Router();

// Routes pour les catégories
router.get(
  "/categories",
  auth.checkToken,
  categoriesController.getAllCategories
);
router.get(
  "/categories/:id",
  auth.checkToken,
  categoriesController.getCategoryById
);
router.post(
  "/categories",
  auth.checkToken,
  categoriesController.createCategory
);
router.put(
  "/categories/:id",
  auth.checkToken,
  categoriesController.updateCategory
);
router.delete(
  "/categories/:id",
  auth.checkToken,
  categoriesController.deleteCategory
);

module.exports = router;
