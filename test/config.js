// test/config.js
const request = require('supertest');
const app = require('../src/app');

module.exports = {
  api: request(app),
};
