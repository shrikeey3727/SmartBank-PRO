const db = require('./db');

exports.findAll = async () => {
  const [rows] = await db.query('SELECT * FROM transactions');
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query('SELECT * FROM transactions WHERE id = ?', [id]);
  return rows[0];
};

exports.create = async (data) => {
  const { accountId, amount, type, timestamp } = data;
  const [result] = await db.query(
    'INSERT INTO transactions (account_id, amount, type, timestamp) VALUES (?, ?, ?, ?)',
    [accountId, amount, type, timestamp || new Date()]
  );
  return { id: result.insertId, ...data };
};
