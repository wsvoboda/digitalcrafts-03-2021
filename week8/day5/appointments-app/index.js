const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const { patient } = require("./models");
const { doctor } = require("./models");
const { appointments } = require("./models");
PORT = 3003;

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
