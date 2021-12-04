const express = require("express");
const app = express();

// Template engine
app.set = ("view engine", "ejs");

// Middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("index sayfa");
});

const port = 3000;
app.listen(port, () => {
  console.log(`port started on ${port}`);
});
