// controllers/userController.js

// In-memory storage for registered users
let users = [];

// Controller for GET /users – returns a static list
exports.getUsers = (req, res) => {
  // You can choose to return the static list as in the assignment:
  res.json([
    { id: 1, name: "Γιώργος" },
    { id: 2, name: "Μαρία" },
  ]);
};

// Controller for POST /users/register
exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Ο χρήστης υπάρχει ήδη!" });
  }

  const newUser = { username, email, password };
  users.push(newUser);
  res.status(201).json({ message: "Επιτυχής εγγραφή!", user: newUser });
};

// Controller for POST /users/login
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // Find the user with matching email and password
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Λάθος email ή κωδικός!" });
  }

  res.json({ message: "Επιτυχής σύνδεση!", user });
};
