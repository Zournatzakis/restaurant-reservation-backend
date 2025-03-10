const express = require("express");
const router = express.Router();
const {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
  loginUser, // If you also want to implement login, you can add this too.
} = require("../controllers/userController");

// Get all users
router.get("/", getUsers);

// Register a new user
router.post("/register", registerUser);

// Update a user (use :id as a URL parameter)
router.put("/:id", updateUser);

// Delete a user
router.delete("/:id", deleteUser);

// Optionally, if you implement login:
router.post("/login", loginUser);

module.exports = router;
