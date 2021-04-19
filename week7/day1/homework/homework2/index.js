const express = require("express");
const app = express();
const PORT = 3005;
const { readFile } = require("fs");

app.listen(PORT, () => {
  console.log(`Server is on localhost:${PORT}`);
});

app.get("/", (req, res) => {
  readFile("index.html", "utf8", (err, html) => {
    res.send(html);
  });
});
