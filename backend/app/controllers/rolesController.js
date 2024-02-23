// Dans le dossier "controller/rolesController.js"

const Role = require("../models/roles");

// Récupérer tous les rôles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Récupérer un rôle par ID
const getRoleById = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      res.status(404).json({ message: "Role not found" });
    } else {
      res.json(role);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Créer un nouveau rôle
const createRole = async (req, res) => {
  const { label } = req.body;
  try {
    const newRole = await Role.create({ label });
    res.status(201).json(newRole);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Mettre à jour un rôle
const updateRole = async (req, res) => {
  const { id } = req.params;
  const { label } = req.body;
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      res.status(404).json({ message: "Role not found" });
    } else {
      await role.update({ label });
      res.json({ message: "Role updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Supprimer un rôle
const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      res.status(404).json({ message: "Role not found" });
    } else {
      await role.destroy();
      res.json({ message: "Role deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
