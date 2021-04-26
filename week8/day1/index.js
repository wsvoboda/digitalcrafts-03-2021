const express = require("express");
const app = express();
const PORT = 3000;
const pool = require("./db.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is your closet.");
});

app.post("/clothes", async (req, res) => {
  try {
    const { name, color, size } = req.body;

    const newItem = await pool.query(
      "INSERT INTO items (name, color, size) VALUES ($1, $2, $3)",
      [name, color, size]
    );
    res.json(newItem);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/clothes", async (req, res) => {
  try {
    const getClothesFromDB = await pool.query(
      "SELECT name, color, size FROM items"
    );
    res.json(getClothesFromDB.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/read_clothes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const readSingleItemFromDB = await pool.query(
      "SELECT name, color, size FROM items WHERE itemsid = ($1)",
      [id]
    );
    res.json(readSingleItemFromDB.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/update_clothes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, color, size } = req.body;
    const updateIteminDB = await pool.query(
      "UPDATE items SET name = $1, color = $2, size = $3 WHERE itemsid = $4",
      [name, color, size, id]
    );
    res.json(updateIteminDB);
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/delete_clothes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItemInDB = await pool.query(
      "DELETE FROM items WHERE itemsid = $1",
      [id]
    );
    res.json("Clothing item details were successfully deleted");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}...`);
});
