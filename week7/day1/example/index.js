const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3003;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  readFile("index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/about", (req, res) => {
  readFile("about.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/faq", (req, res) => {
  readFile("faq.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.post("/messages", (req, res) => {
  //   req.params;
  const { name } = req.body;
  const message = `Your name is ${name}`;
  res.send(message);
});

app.get("*", (req, res) => {
  readFile("error.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Server is on localhost:${PORT}`);
});
