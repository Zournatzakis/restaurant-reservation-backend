const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");

const app = express();
const port = 3000;

// Use JSON parsing middleware
app.use(bodyParser.json());
// Alternatively, you can use: app.use(express.json());

// Mount the user routes
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
