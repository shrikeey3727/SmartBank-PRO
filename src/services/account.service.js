const accountDAO = require('../dao/account.dao');
const Account = require('../models/Account');

exports.getAll = async () => {
  const rows = await accountDAO.findAll();
  return rows.map(row => new Account(row));
};

exports.getById = async (id) => {
  const row = await accountDAO.findById(id);
  if (!row) throw { status: 404, message: 'Account not found' };
  return new Account(row);
};

exports.create = async (data) => {
  const result = await accountDAO.create(data);
  return new Account(result);
};

exports.update = async (id, data) => {
  await exports.getById(id); // ensure exists
  const updated = await accountDAO.update(id, data);
  return new Account(updated);
};

exports.remove = async (id) => {
  await exports.getById(id);
  await accountDAO.remove(id);
};
