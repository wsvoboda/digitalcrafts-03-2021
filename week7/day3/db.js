const Pool = require("pg").Pool;
const password = require("./config.js");

const pool = new Pool({
  user: "postgres",
  password: `${password}`,
  host: "localhost",
  port: 5432,
  database: "todolist",
});

module.exports = pool;
