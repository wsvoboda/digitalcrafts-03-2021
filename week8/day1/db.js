const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: `Americ@`,
  host: "localhost",
  port: 5432,
  database: "clothes",
});

module.exports = pool;
