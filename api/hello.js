// api/hello.js
const db = require("./db");

export default (req, res) => {
  // Retrieve data from the database
  db.query("SELECT * FROM papers", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred." });
    } else {
      res.status(200).json(result.rows);
    }
  });
};
