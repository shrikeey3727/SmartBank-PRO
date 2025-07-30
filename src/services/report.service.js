const db = require('../dao/db');

exports.getSummary = async () => {
  const [result] = await db.query(`
    SELECT 
      COUNT(DISTINCT customers.id) AS totalCustomers,
      COUNT(DISTINCT accounts.id) AS totalAccounts,
      SUM(accounts.balance) AS totalBalance
    FROM customers
    LEFT JOIN accounts ON customers.id = accounts.customer_id
  `);

  return result[0];
};

exports.getCustomerReport = async (customerId) => {
  const [accounts] = await db.query(
    'SELECT * FROM accounts WHERE customer_id = ?',
    [customerId]
  );

  const [transactions] = await db.query(`
    SELECT t.* 
    FROM transactions t
    JOIN accounts a ON a.id = t.account_id
    WHERE a.customer_id = ?
  `, [customerId]);

  return {
    customerId,
    accounts,
    transactions
  };
};
