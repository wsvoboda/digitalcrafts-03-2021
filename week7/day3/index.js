const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to node server");
});

// Routes we need to define for our node server
// CRUD - create read update delete
// create todo
app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodoInDB = await pool.query(
      "INSERT INTO todo (description) VALUES ($1)",
      [description]
    ); // adds data to database called todo under column called description
    console.log(req.body);
    res.json(newTodoInDB);
    res.status(200);
  } catch (err) {
    console.log(err.message);
  }
});

// read todo
// update todo
// delete todo

app.listen(port, () => {
  console.log(`listening on port ${port}.`);
});
