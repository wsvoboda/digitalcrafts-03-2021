const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is on localhost:${PORT}`);
});

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

app.get("*", (req, res) => {
  readFile("error.html", "utf8", (err, html) => {
    res.send(html);
  });
});
