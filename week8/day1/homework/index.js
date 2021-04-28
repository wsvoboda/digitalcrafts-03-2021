const express = require("express");
const app = express();
const PORT = 3000;
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "template");
app.set("view engine", "html");
const pool = require("./db.js");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/css", express.static("css"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/delete-task", async (req, res) => {
  try {
    const todoToDelete = req.body.todo_id;
    const deleteTask = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      todoToDelete,
    ]);
    res.redirect("/alltasks");
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/add", async (req, res) => {
  try {
    const todo = req.body.todo;
    const newItem = await pool.query(
      "INSERT INTO todo (description) VALUES ($1)",
      [todo]
    );
    res.render("newtask", { locals: { todo: todo } });
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const showTasks = await pool.query(
      "SELECT description FROM todo where todo_id = $1",
      [id]
    );
    const task = showTasks.rows[0].description;
    res.render("task", { locals: { task: task, id: id } });
  } catch (err) {
    res.send("No task exists with that ID");
  }
});

app.get("/alltasks", async (req, res) => {
  try {
    const showAllTasks = await pool.query("SELECT * FROM todo");
    const alltasks = showAllTasks.rows;
    res.render("alltasks", { locals: { tasks: alltasks } });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}...`);
});
