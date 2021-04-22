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
    res.json(readTodosFromDB.rows);
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

app.put("/update_todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodoInDB = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    ); // pulls the task with the id number and replaces it with new description
    res.json(updateTodoInDB);
  } catch (err) {
    console.log(err.message);
  }
});

// delete todo

app.delete("/delete_todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodoInDB = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id]
    );
    res.json("Todo was successfully deleted");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}.`);
});
