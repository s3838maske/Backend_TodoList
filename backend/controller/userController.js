const userModel = require("../models/userModels");

// Create User logic
const addUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  userModel.createUser({ name, email, password }, (err, result) => {
    if (err) {
      console.error("Error creating user:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res
      .status(200)
      .json({ message: "User created successfully", userID: result.insertId });
  });
};

// Delete user logic
const deleteUser = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "User id is required" });
  }

  userModel.deleteUser(id, (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).json({ message: "Server error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  });
};

// Updated user logic
const updateUser = (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;

  // Validate input
  if (!id || !name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  userModel.updateUser({ name, email, password, id }, (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).json({ message: "Server error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  });
};

// Get user details
const fetchUserDetails = (req, res) => {
  userModel.getUserDetails((err, result) => {
    if (err) {
      console.error("Error fetching user details:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json({
      message: "Users retrieved successfully",
      data: result,
    });
  });
};

module.exports = { addUser, deleteUser, updateUser, fetchUserDetails };
