const express = require("express");
const router = express.Router();

const categoriesRouter = require("./categoriesRouter");
const rolesRouter = require("./rolesRouter");
const articlesRouter = require("./articlesRouter");
const usersRouter = require("./usersRouter");

router.use(categoriesRouter);
router.use(rolesRouter);
router.use(articlesRouter);
router.use(usersRouter);

module.exports = router;
