const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is active on localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("This is the homepage.");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.get("/team", (req, res) => {
  res.send("This is the team page.");
});

app.get("/faq", (req, res) => {
  res.send("This is the FAQ page.");
});

app.post("/faq", (req, res) => {
  const { name, location, subject } = req.body;
  const message = `${name} from ${location}, your question is about ${subject}.`;
  res.send(message);
});
