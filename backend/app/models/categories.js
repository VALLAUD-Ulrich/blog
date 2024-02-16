const client = require("../database/pg");

class Category {
  constructor(obj) {
    this.id = obj.id;
    this.label = obj.label;
    this.artilcles_id = obj.articles_id;
  }

  static async create(label, articles_id) {
    const result = await client.query(
      "INSERT INTO categories (label , article_id) VALUES ($1 , $2) RETURNING *",
      [label, articles_id]
    );
    return new Category(result.rows[0]);
  }

  static async findAll() {
    const result = await client.query("SELECT * FROM categories");
    return result.rows;
  }

  static async findOneById(id) {
    const result = await client.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );
    return new Category(result.rows[0]);
  }

  static async update(label, id) {
    const result = await client.query(
      "UPDATE categories SET label = $1 WHERE id = $2 RETURNING *",
      [label, id]
    );
    return new Category(result.rows[0]);
  }

  static async delete(id) {
    const result = await client.query("DELETE FROM categories WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  }
}

module.exports = Category;
