//
// This file is simply a script to insert a user into the database.
// It is not used by the application.
// In the insertUser.js file, replace 'yourPlainTextPassword', 'your_mysql_username', 'your_mysql_password',
// and 'your_database_name' with your actual values.
// Open the terminal and navigate to the directory where the insertUser.js file is located.
// Run the script by executing the following command in your terminal:
// node insertUser.js

require("dotenv").config({ path: __dirname + "/.env.local" });

const bcrypt = require("bcrypt");
const mysql = require("mysql");

const saltRounds = 10;
// ************************************************************
// !!! DO NOT COMMIT THE ACTUAL PASSWORD TO ANY REPOSITORY !!!!
// !!!!!!! DELETE THE PASSWORD AFTER RUNNING THIS SCRIPT !!!!!!
// ************************************************************
const password = "password";
// ************************************************************
// !!!!!!! DO NOT COMMIT THE PASSWORD TO ANY REPOSITORY !!!!!!!
// !!!!!!! DELETE THE PASSWORD AFTER RUNNING THIS SCRIPT !!!!!!
// ************************************************************

const email = "admin@example.com";

bcrypt.hash(password, saltRounds, function (err, hash) {
  if (err) {
    console.error("Error hashing password:", err);
    return;
  }

  // Create a connection to your MySQL database
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  con.connect(function (err) {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to database");

    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    con.query(sql, [email, hash], function (err, result) {
      if (err) {
        console.error("Error inserting user into database:", err);
        return;
      }
      console.log("User inserted into database");
      con.end((err) => {
        if (err) {
          console.error("Error ending the connection:", err);
        } else {
          console.log("Connection ended successfully.");
        }
      });
    });
  });
});
