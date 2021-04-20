const http = require("http");
const hostname = "127.0.0.1";
const PORT = 3000;
const express = require("express");
const app = express();
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
const server = http.createServer(app);
const db = require("./db");

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}.`);
});

app.get("/", (req, res) => {
  res.render("home", {
    locals: {
      title: "Address Book App",
    },
    partials: {
      head: "/partials/head",
    },
  });
});

app.get("/friends/:handle", (req, res) => {
  const { handle } = req.params;
  const friend = db.find((f) => f.handle === handle);

  if (friend) {
    res.render("friend", {
      locals: {
        title: `${friend.name}'s info`,
        friend,
      },
      partials: {
        head: "/partials/head",
      },
    });
  } else {
    res.status(404).send(`no friend with handle ${handle}`);
  }
});

app.get("/friends", (req, res) => {
  res.render("friends-list", {
    locals: {
      title: "Friends List",
      friends: db,
      path: req.path,
    },
    partials: {
      head: "/partials/head",
    },
  });
});
