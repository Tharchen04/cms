const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
