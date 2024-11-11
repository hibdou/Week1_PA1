const express = require("express");
const app = express();
const path = require("path");
const indexController = require("./controllers/index.server.controller");

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define the route for the home page
app.get("/", indexController.renderHomePage);

// Start the server
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
