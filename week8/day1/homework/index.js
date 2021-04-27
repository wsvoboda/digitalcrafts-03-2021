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
    res.render("newtask");
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/task/:id", async (req, res) => {
  const { id } = req.params;
  const showTasks = await pool.query(
    "SELECT description FROM todo where todo_id = $1",
    [id]
  );
  const task = showTasks.rows[0].description;
  if (task) {
    res.render("task", { locals: { task: task } });
  } else {
    res
      .status(404)
      .send(`That task does not exist, there are no tasks with an id of ${id}`);
  }
});

app.get("/alltasks", async (req, res) => {
  const showAllTasks = await pool.query("SELECT description FROM todo");
  const rowCount = showAllTasks.rowCount;
  let tasks = [];
  for (i = 0; i < rowCount; i++) {
    tasks.push(showAllTasks.rows[i].description);
  }
  res.render("alltasks", { locals: { tasks: tasks } });
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}...`);
});
