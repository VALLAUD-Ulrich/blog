const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articles");

router.post("/article", articlesController.create);
router.get("/articles", articlesController.findAll);
router.get("/article/:id", articlesController.findOneById);
router.patch("/article/:id", articlesController.update);
router.delete("/article/:id", articlesController.delete);

module.exports = router;
