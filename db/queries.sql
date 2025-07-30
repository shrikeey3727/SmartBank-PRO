-- 🔎 All customer balances
SELECT c.name, SUM(a.balance) AS total_balance
FROM customers c
JOIN accounts a ON a.customer_id = c.id
GROUP BY c.id;

-- 🔎 Most active accounts
SELECT account_id, COUNT(*) AS txn_count
FROM transactions
GROUP BY account_id
ORDER BY txn_count DESC
LIMIT 5;

-- 🔎 Recent transactions
SELECT * FROM transactions
ORDER BY timestamp DESC
LIMIT 10;
