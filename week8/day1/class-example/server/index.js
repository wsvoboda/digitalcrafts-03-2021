const express = require("express");
const app = express();
const PORT = 3000;
const es6Renderer = require("express-es6-template-engine");

const people = [
  {
    peopleid: 1,
    name: "Lucas",
    age: 33,
    job: "construction worker",
    listOfKnownAliases: ["Luke", "Luca"],
  },
  {
    peopleid: 2,
    name: "Nathan",
    age: 21,
    job: "Student",
    listOfKnownAliases: ["Nate", "Nathanial"],
  },
  {
    peopleid: 3,
    name: "Mark",
    age: 90,
    job: "Retired",
    listOfKnownAliases: ["Marcus"],
  },
];

app.engine("html", es6Renderer);
app.set("views", "../template");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("people");
});

app.get("/person/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.peopleid.toString() === id);
  if (person) {
    res.render("user", { locals: { person: person } });
  } else {
    res
      .status(404)
      .send(`That user does not exist, there are no users with an id of ${id}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}.`);
});
