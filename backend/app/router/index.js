const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const articlesRouter = require("./articles");
const categoriesRouter = require("./categories");

router.use(usersRouter);
router.use(articlesRouter);
router.use(categoriesRouter);

module.exports = router;
