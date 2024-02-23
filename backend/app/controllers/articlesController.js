const Article = require("../models/articles");

// Récupérer tous les articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Récupérer un article par ID
const getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      res.status(404).json({ message: "Article not found" });
    } else {
      res.json(article);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Créer un nouvel article
const createArticle = async (req, res) => {
  const { title, content, users_id } = req.body;
  try {
    const newArticle = await Article.create({ title, content, users_id });
    res.status(201).json(newArticle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Mettre à jour un article
const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, users_id } = req.body;
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      res.status(404).json({ message: "Article not found" });
    } else {
      await article.update({ title, content, users_id });
      res.json({ message: "Article updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Supprimer un article
const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      res.status(404).json({ message: "Article not found" });
    } else {
      await article.destroy();
      res.json({ message: "Article deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
