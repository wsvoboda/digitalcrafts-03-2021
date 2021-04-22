const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to vacation list server");
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}.`);
});
