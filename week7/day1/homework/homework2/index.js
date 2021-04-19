const express = require("express");
const app = express();
const PORT = 3005;
const { readFile } = require("fs");

app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log(`Server is on localhost:${PORT}`);
});

app.get("/", (req, res) => {
  readFile("index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/store", (req, res) => {
  readFile("store.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/contact", (req, res) => {
  readFile("contact.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("*", (req, res) => {
  readFile("errorpage.html", "utf8", (err, html) => {
    res.send(html);
  });
});
