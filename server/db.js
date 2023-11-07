const { response } = require('express');
const { Pool } = require('pg');
const { errors } = require('pg-promise');

const pool = new Pool({
  user: 'postgres',
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  port: 5432,
  database:'login'
});

module.exports = pool; 