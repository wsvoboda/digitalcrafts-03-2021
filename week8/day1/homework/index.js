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

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add", (req, res) => {
  try {
    const todo = req.body.todo;
    const newItem = pool.query("INSERT INTO todo (description) VALUES ($1)", [
      todo,
    ]);
    console.log(todo);
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
    const showAllTasks = await pool.query("SELECT description FROM todo");
    const alltasks = showAllTasks.rows;
    res.render("alltasks", { locals: { tasks: alltasks } });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}...`);
});
