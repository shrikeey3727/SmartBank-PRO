const db = require('./db');

exports.findAll = async () => {
  const [rows] = await db.query('SELECT * FROM accounts');
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query('SELECT * FROM accounts WHERE id = ?', [id]);
  return rows[0];
};

exports.create = async (data) => {
  const { customerId, balance, type } = data;
  const [result] = await db.query(
    'INSERT INTO accounts (customer_id, balance, type) VALUES (?, ?, ?)',
    [customerId, balance, type]
  );
  return { id: result.insertId, ...data };
};

exports.update = async (id, data) => {
  const { balance, type } = data;
  await db.query(
    'UPDATE accounts SET balance = ?, type = ? WHERE id = ?',
    [balance, type, id]
  );
  return { id, balance, type };
};

exports.remove = async (id) => {
  await db.query('DELETE FROM accounts WHERE id = ?', [id]);
};
