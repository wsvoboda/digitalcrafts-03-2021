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

app.post("/vacation", async (req, res) => {
  try {
    const { location } = req.body;

    const newLocation = await pool.query(
      "INSERT INTO locations (location) VALUES ($1)",
      [location]
    );
    res.json(newLocation);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}.`);
});
