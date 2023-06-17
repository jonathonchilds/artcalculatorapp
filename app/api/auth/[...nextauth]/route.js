// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import mysql from "mysql";

// async function verifyCredentials(email, password) {
//   const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });
//   const [rows] = await connection.execute(
//     "SELECT * FROM users WHERE email = ?",
//     [email]
//   );
//   if (rows.length === 0 || rows[0].password !== password) {
//     return null;
//   }
//   return rows[0];
// }

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "my-project",
//       credentials: {
//         email: {
//           label: "email",
//           type: "email",
//           placeholder: "jsmith@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const user = await verifyCredentials(
//           credentials.email,
//           credentials.password
//         );
//         if (user) {
//           return { id: user.id, email: user.email, name: user.name };
//         }
//         return null;
//       },
//     }),
//   ],
// });

// export { handler as GET, handler as POST };
