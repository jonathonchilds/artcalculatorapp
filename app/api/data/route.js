import mysql from "mysql";
import { NextResponse } from "next/server";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect();

const queryDatabase = async (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export async function GET() {
  try {
    const results = await queryDatabase("SELECT * FROM `papers`");
    connection.end();
    return NextResponse.json(results);
  } catch (error) {
    connection.end();
    console.error("Error executing query:", error);
    return new NextResponse(
      500,
      "An error occurred when querying the database."
    );
  }
}
// } catch (error) {
//   console.error("Error executing query:", error);
//   status(500).json({
//     error: "An error occurred when querying the database.",
//   });
// } finally {

// import mysql from "mysql";

// const connection = mysql.createConnection({
//   host: "mysql.s501.sureserver.com",
//   port: "3308",
//   user: "digitalarts",
//   password: "QuP#Tg3}8BmRPFs",
//   database: "digitalarts_printcalculator",
// });

// const queryDatabase = (query) => {
//   return new Promise((resolve, reject) => {
//     connection.query(query, (error, results, fields) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };

// export async function GET() {
//   connection.connect();
//   try {
//     const results = await queryDatabase("SELECT * FROM `papers`;");
//     res.status(200).json(results);
//   } catch (error) {
//     console.error("Error executing query:", error);
//     res.status(500).json({
//       error: "An error occurred when querying the database.",
//     });
//   }

//   connection.end();
// }

// In this example, I've made your connection.query() call into a function (queryDatabase()) that returns a promise.
// This makes it possible to use await when calling this function inside your route handler.
// The route handler is set up to connect to the database, run the query, send the results back as a JSON response, and then close the connection.
// If an error occurs at any point in this process, it will be caught and logged, and a 500 response will be sent back.

// Also, note that you must use backticks ` (not single quotes ') around table names in MySQL queries.

// import { sql } from "sql";
// import { query } from "@app/db";

// export async function GET() {
//   try {
//     const results = await query(sql`SELECT * FROM papers`);
//     return res.json(results);
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// }
