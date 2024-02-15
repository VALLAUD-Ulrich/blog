const client = require("../database/pg");

class User {
  constructor(obj) {
    this.id = obj.id;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.email = obj.email;
    this.password = obj.password;
    this.role_id = obj.role_id;
  }

  static async create({ firstname, lastname, email, password }) {
    const result = await client.query(
      "INSERT INTO users (firstname, lastname, email, password, role_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [firstname, lastname, email, password, 2]
    );
    return new User(result.rows[0]);
  }

  static async findOneByEmail(email) {
    const result = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.lenght > 0) {
      return new User(result.rows[0]);
    }
    return null;
  }

  static async findAll() {
    const result = await client.query("SELECT * FROM users");
    return result.rows;
  }

  static async findUserByRole(role_id) {
    const result = await client.query(
      "SELECT roles.label , users.* from users join roles on roles.id = users.role_id where users.role_id=$1",
      [role_id]
    );
    console.log(result);
    return result.rows;
  }

  static async update(firstname, lastname, email, password, role_id, id) {
    const result = await client.query(
      "UPDATE users SET firstname = $1, lastname = $2, email = $3, password = $4, role = $5 WHERE id = $6 RETURNING *",
      [firstname, lastname, email, password, role_id, id]
    );
    return new User(result.rows[0]);
  }

  static async delete(id) {
    const result = await client.query("DELETE FROM users WHERE id = $1", [id]);
    return result.rowCount;
  }
}

module.exports = User;
