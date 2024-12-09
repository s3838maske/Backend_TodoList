const mysql = require("mysql2");

// Database Configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  // password: "",
  // database: "my_database",
  database: "my_sql",
  port: 3306, // Default MySQL port; ensure your MySQL server is configured correctly
};

// Create Database Connection
const db = mysql.createConnection(dbConfig);

// Test Database Connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;
