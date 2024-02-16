const Article = require("../models/articles");

const articlesController = {
  async create(req, res) {
    try {
      const article = req.body;
      article.users_id = req.headers.users_id;
      const articleCreate = await Article.create(article);
      res.status(200).json(articleCreate);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  //! bug
  async findAll(_req, res) {
    try {
      const articles = await Article.findAll();
      res.status(200).json(articles);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  //! bug

  // get by categories

  async findOneById(req, res) {
    try {
      const article = await Article.findOneById(req.params.id);
      res.status(200).json(article);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const articleUpdate = await Article.update(
        req.body.title,
        req.body.content,
        req.params.id
      );
      res.status(200).json({ message: "Article updated", articleUpdate });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async delete(req, res) {
    try {
      await Article.delete(req.params.id);
      res.status(200).json({ message: "Article deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = articlesController;
