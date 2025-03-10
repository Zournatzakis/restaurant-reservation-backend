const db = require("../config/db");

// Create (Register User)
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const [result] = await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    res.status(201).json({
      message: "Χρήστης εγγράφηκε επιτυχώς!",
      userId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read (Get All Users)
exports.getUsers = async (req, res) => {
  try {
    const [users] = await db.execute("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update (Update a User)
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    await db.execute("UPDATE users SET name = ?, email = ? WHERE id = ?", [
      name,
      email,
      id,
    ]);
    res.json({ message: "Ο χρήστης ενημερώθηκε επιτυχώς!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete (Remove a User)
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "Ο χρήστης διαγράφηκε επιτυχώς!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
