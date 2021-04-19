const http = require("http");
const express = require("express");
const app = express();
const address = "127.0.0.1";
const PORT = 3002;
const { readFile } = require("fs");

// app.use(express.json());

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-type", "text/plain");
//   res.end("hello");
// });

// server.listen(PORT, address, () => {
//   console.log(`server is on http://${address}:${PORT}`);
// });

app.get("/", (req, res) => {
  readFile("index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/home", (req, res) => {
  readFile("homepage.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("*", (req, res) => {
  readFile("error.html", "utf8", (err, html) => {
    res.send(html);
  });
});

// app.get("/another-place", (req, res) => {
//   //   res.send("Hello another-place");
// });

app.listen(PORT, () => {
  console.log(`Your server is listening on ${PORT}`);
});
