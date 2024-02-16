const client = require("../database/pg");

class Article {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.content = obj.content;
    this.users_id = obj.users_id;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
  }

  static async create({ title, content, users_id }) {
    console.log(title, content, users_id);
    const result = await client.query(
      "INSERT INTO articles (title, content, users_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, users_id]
    );
    return new Article(result.rows[0]);
  }
  // get all articles
  static async findAll() {
    const result = await client.query("SELECT * FROM articles");
    return result;
  }

  static async findOneById(id) {
    const result = await client.query("SELECT * FROM articles WHERE id = $1", [
      id,
    ]);
    if (result.rows.length > 0) {
      return new Article(result.rows[0]);
    }
    return null;
  }

  static async update(title, content, id) {
    const result = await client.query(
      "UPDATE articles SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [title, content, id]
    );
    return new Article(result.rows[0]);
  }

  static async delete(id) {
    const result = await client.query("DELETE FROM articles WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  }
}

module.exports = Article;
