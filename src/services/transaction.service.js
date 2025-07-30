const transactionDAO = require('../dao/transaction.dao');
const accountDAO = require('../dao/account.dao');
const Transaction = require('../models/Transaction');

exports.getAll = async () => {
  const rows = await transactionDAO.findAll();
  return rows.map(row => new Transaction(row));
};

exports.getById = async (id) => {
  const row = await transactionDAO.findById(id);
  if (!row) throw { status: 404, message: 'Transaction not found' };
  return new Transaction(row);
};

exports.create = async ({ accountId, amount, type }) => {
  const account = await accountDAO.findById(accountId);
  if (!account) throw { status: 404, message: 'Account not found' };

  const isCredit = type === 'credit';
  const newBalance = isCredit
    ? account.balance + amount
    : account.balance - amount;

  if (!isCredit && newBalance < 0)
    throw { status: 400, message: 'Insufficient balance' };

  await accountDAO.update(accountId, { balance: newBalance, type: account.type });

  const txn = await transactionDAO.create({
    accountId,
    amount,
    type,
    timestamp: new Date()
  });

  return new Transaction(txn);
};
