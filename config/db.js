const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'cms_db',      
  user: 'postgres',      
  password: '123',
ssl:{
  rejectUnauthorized: false,
}

});

module.exports = db;
