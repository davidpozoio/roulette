const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "static")));

app.listen(8000, () => {
  console.log("the server has started in 8000");
});
