// Dans le fichier "models/articles_to_categories.js"

const { DataTypes } = require("sequelize");
const sequelize = require("../database/pg");

const ArticleToCategory = sequelize.define(
  "ArticleToCategory",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    articles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categories_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "articles_to_categories",
    timestamps: false,
  }
);

module.exports = ArticleToCategory;
