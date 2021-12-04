const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("index sayfa");
});

const port = 3000;
app.listen(port, () => {
  console.log(`port started on ${port}`);
});
