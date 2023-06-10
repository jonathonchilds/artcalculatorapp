// test.js
const db = require("./db");

db.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connection successful!");
    console.log(result.rows);
  }

  db.end(); // Close the database connection
});
