require('dotenv').config();
const { Pool, types } = require('pg');

types.setTypeParser(1700, parseFloat); // NUMERIC vira número

module.exports = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
