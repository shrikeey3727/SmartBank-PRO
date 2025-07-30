const db = require('./db');

exports.findAll = async () => {
  const [rows] = await db.query('SELECT * FROM customers');
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query('SELECT * FROM customers WHERE id = ?', [id]);
  return rows[0];
};

exports.create = async (data) => {
  const { name, email } = data;
  const [result] = await db.query(
    'INSERT INTO customers (name, email) VALUES (?, ?)',
    [name, email]
  );
  return { id: result.insertId, ...data };
};

exports.update = async (id, data) => {
  const { name, email } = data;
  await db.query('UPDATE customers SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  return { id, name, email };
};

exports.remove = async (id) => {
  await db.query('DELETE FROM customers WHERE id = ?', [id]);
};
