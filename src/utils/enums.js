// src/utils/enums.js
const freeze = (obj) => Object.freeze(obj);

exports.TransactionType = freeze({
  CREDIT: 'credit',
  DEBIT: 'debit',
});

exports.AccountType = freeze({
  SAVINGS: 'savings',
  CURRENT: 'current',
  LOAN: 'loan',
});
