const Users = require("../models/users");

const usersController = {
  async create(req, res) {
    try {
      const user = req.body;
      const userCreate = await Users.create(user);
      res.status(201).json(userCreate);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async findAll(req, res) {
    try {
      const users = await Users.findAll();
      console.log(users);
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
      const user = await Users.update(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const user = await Users.delete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = usersController;
