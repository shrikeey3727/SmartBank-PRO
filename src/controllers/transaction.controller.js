const transactionService = require('../services/transaction.service');

exports.getAllTransactions = async (req, res, next) => {
  try {
    const txns = await transactionService.getAll();
    res.json(txns);
  } catch (err) {
    next(err);
  }
};

exports.getTransactionById = async (req, res, next) => {
  try {
    const txn = await transactionService.getById(req.params.id);
    res.json(txn);
  } catch (err) {
    next(err);
  }
};

exports.createTransaction = async (req, res, next) => {
  try {
    const txn = await transactionService.create(req.body);
    res.status(201).json(txn);
  } catch (err) {
    next(err);
  }
};
