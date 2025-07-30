-- Insert dummy customers
INSERT INTO customers (name, email) VALUES
('Alice Dev', 'alice@bank.com'),
('Bob Ops', 'bob@bank.com');

-- Insert accounts
INSERT INTO accounts (customer_id, balance, type) VALUES
(1, 10000.00, 'savings'),
(2, 5000.00, 'current');

-- Insert transactions
INSERT INTO transactions (account_id, amount, type) VALUES
(1, 2000.00, 'debit'),
(1, 1000.00, 'credit'),
(2, 1500.00, 'debit');
