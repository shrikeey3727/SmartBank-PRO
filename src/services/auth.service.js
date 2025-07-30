const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const db = require('../dao/db'); // Assume you have `users` table

exports.register = async ({ username, password }) => {
  const [existing] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  if (existing.length) throw { status: 400, message: 'Username already exists' };

  await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
  return { username };
};

exports.login = async ({ username, password }) => {
  const [users] = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
  if (!users.length) throw { status: 401, message: 'Invalid credentials' };

  const payload = { userId: users[0].id, username };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  return token;
};
