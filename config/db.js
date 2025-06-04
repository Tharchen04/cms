const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'cms_db',       // your DB name created in pgAdmin
  user: 'postgres',      // usually 'postgres'
  password: '123'
});

module.exports = db;
