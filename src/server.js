const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "static")));

app.use("*", (req, res) => {
  res.status(400).json({
    message: "Page not found",
  });
});

app.listen(8000, () => {
  console.log("the server has started in 8000");
});
