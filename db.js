const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306 // default port, change if needed
});

// Wrap the pool.query method to use promises (so we can use async/await)
const promisePool = pool.promise();

module.exports = promisePool;
