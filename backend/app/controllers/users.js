const Users = require("../models/users");

const usersController = {
  async create(req, res) {
    try {
      const user = req.body;
      const userCreate = await Users.create(user);
      res.status(200).json(userCreate);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async findAll(_req, res) {
    try {
      const users = await Users.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async findUserByRole(req, res) {
    try {
      const user = await Users.findUserByRole(req.params.role_id);
      console.log(user);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const userUpdate = await Users.update(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.params.id
      );
      res.status(200).json({ message: "User updated", userUpdate });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async delete(req, res) {
    try {
      await Users.delete(req.params.id);
      res.status(200).json({ message: "User deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = usersController;
