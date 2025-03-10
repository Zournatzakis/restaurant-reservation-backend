// routes/users.js
const express = require("express");
const router = express.Router();
const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

// GET /users
router.get("/", getUsers);

// POST /users/register
router.post("/register", registerUser);

// POST /users/login
router.post("/login", loginUser);

module.exports = router;
