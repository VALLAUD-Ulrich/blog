const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categories");

router.post("/category", categoriesController.create);
router.get("/categories", categoriesController.findAll);
router.get("/category/:id", categoriesController.findOneById);
router.patch("/category/:id", categoriesController.update);
router.delete("/category/:id", categoriesController.delete);

module.exports = router;
