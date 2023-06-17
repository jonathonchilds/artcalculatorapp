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

export async function POST() {
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
