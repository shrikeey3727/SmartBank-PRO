const db = require('./db');

exports.logActivity = async (action, userId = null) => {
  const [result] = await db.query(
    'INSERT INTO logs (action, user_id, created_at) VALUES (?, ?, NOW())',
    [action, userId]
  );
  return result.insertId;
};

exports.getAllLogs = async () => {
  const [rows] = await db.query('SELECT * FROM logs ORDER BY created_at DESC');
  return rows;
};
