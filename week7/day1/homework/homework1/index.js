const express = require("express");
const app = express();

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`This server is on localhost${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello my first node server!");
});
