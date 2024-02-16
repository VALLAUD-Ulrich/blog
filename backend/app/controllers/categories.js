const Category = require("../models/categories");

const categoriesController = {
  async create(req, res) {
    try {
      const category = req.body;
      category.articles_id = req.headers.articles_id;
      const categoryCreate = await Category.create(
        category.label,
        category.articles_id
      );
      res.status(200).json(categoryCreate);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async findAll(_req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async findOneById(req, res) {
    try {
      const category = await Category.findOneById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const categoryUpdate = await Category.update(
        req.body.label,
        req.params.id
      );
      res.status(200).json({ message: "Category updated", categoryUpdate });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async delete(req, res) {
    try {
      await Category.delete(req.params.id);
      res.status(200).json({ message: "Category deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = categoriesController;
