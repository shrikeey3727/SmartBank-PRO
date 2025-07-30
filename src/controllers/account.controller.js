const accountService = require('../services/account.service');

exports.getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await accountService.getAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
};

exports.getAccountById = async (req, res, next) => {
  try {
    const account = await accountService.getById(req.params.id);
    res.json(account);
  } catch (err) {
    next(err);
  }
};

exports.createAccount = async (req, res, next) => {
  try {
    const account = await accountService.create(req.body);
    res.status(201).json(account);
  } catch (err) {
    next(err);
  }
};

exports.updateAccount = async (req, res, next) => {
  try {
    const updated = await accountService.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    await accountService.remove(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
