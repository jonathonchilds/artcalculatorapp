const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "http://localhost",
  database: "artApp",
  password: "da1yl4e.",
  port: 5433,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
