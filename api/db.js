import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "c3z4j9y7B@1",
  database: "crud"
});

