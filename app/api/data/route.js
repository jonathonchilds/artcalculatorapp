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

// id SERIAL PRIMARY KEY,
//     paper_type VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
//     paper_weight VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
//     paper_description VARCHAR(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
//     multiplier FLOAT,
//     category ENUM('Fine Art', 'Photo') DEFAULT 'Fine Art'

export async function PUT({ body }) {
  try {
    const results = await queryDatabase(
      "SELECT * FROM `papers` WHERE `id` = '${body.id}"
    );
    if (results.length === 0) {
      return new NextResponse(404, "Paper not found.");
    }
    const paper = results[0];
    const updatedPaper = { ...paper, ...body };
    await queryDatabase(
      `UPDATE \`papers\` SET \`paper_type\` = ${body.paper_type}, \`paper_weight\` = ${body.paper_weight}, \`paper_description\` = ${body.paper_description}, \`multiplier\` = ${body.multiplier}, \`category\` = ${body.category} WHERE \`id\` = ${body.id};`
    );
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

export async function DELETE() {
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
