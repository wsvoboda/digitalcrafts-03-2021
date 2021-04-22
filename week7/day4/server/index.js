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
    const { location, country, month, cost } = req.body;

    const newLocation = await pool.query(
      "INSERT INTO locations (location, country, month, cost) VALUES ($1, $2, $3, $4)",
      [location, country, month, cost]
    );
    res.json(newLocation);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/read_vacations", async (req, res) => {
  try {
    const readVacationsFromDB = await pool.query("SELECT * FROM locations");
    res.json(readVacationsFromDB.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/read_vacations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const readSingleVacationFromDB = await pool.query(
      "SELECT * FROM locations WHERE location_id = ($1)",
      [id]
    );
    res.json(readSingleVacationFromDB.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/update_vacation/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { location, country, month, cost } = req.body;
    const updateVacationInDB = await pool.query(
      "UPDATE locations SET location = $1, country = $2, month = $3, cost = $4 WHERE location_id = $5",
      [location, country, month, cost, id]
    );
    res.json(updateVacationInDB);
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/delete_vacation/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVacationInDB = await pool.query(
      "DELETE FROM locations WHERE location_id = $1",
      [id]
    );
    res.json("Vacation location was successfully deleted");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}.`);
});
