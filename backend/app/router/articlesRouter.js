// Dans le dossier "routes/articlesRoutes.js"

const express = require("express");
const articlesController = require("../controllers/articlesController");
const auth = require("../middleware/auth");

const router = express.Router();

// Routes pour les articles
router.get("/articles", auth.checkToken, articlesController.getAllArticles);
router.get("/articles/:id", auth.checkToken, articlesController.getArticleById);
router.post("/articles", auth.checkToken, articlesController.createArticle);
router.put("/articles/:id", auth.checkToken, articlesController.updateArticle);
router.delete(
  "/articles/:id",
  auth.checkToken,
  articlesController.deleteArticle
);

module.exports = router;
