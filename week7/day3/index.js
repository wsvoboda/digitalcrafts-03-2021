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
    res.json(newTodoInDB);
  } catch (err) {
    console.log(err.message);
  }
});

// read all tasks in todo

app.get("/read_todo", async (req, res) => {
  try {
    const readTodosFromDB = await pool.query("SELECT * FROM todo"); // pulls all tasks
    res.json(readTodosFromDB);
  } catch (err) {
    console.log(err.message);
  }
});

// read just one task

app.get("/read_todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const readSingleTodoFromDB = await pool.query(
      "SELECT * FROM todo WHERE todo_id = ($1)",
      [id]
    ); // pulls the task with the id number
    res.json(readSingleTodoFromDB);
  } catch (err) {
    console.log(err.message);
  }
});

// update todo
// delete todo

app.listen(port, () => {
  console.log(`listening on port ${port}.`);
});
