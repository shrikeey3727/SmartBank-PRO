// src/config/index.js
require('dotenv').config();
const db = require('./db.config');

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || 'change_this_later',
  DB_HOST: db.host,
  DB_USER: db.user,
  DB_PASSWORD: db.password,
  DB_NAME: db.database,
  DB_PORT: db.port,
};
