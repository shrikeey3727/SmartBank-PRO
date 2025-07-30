const customerDAO = require('../dao/customer.dao');
const Customer = require('../models/Customer');

exports.getAll = async () => {
  const rows = await customerDAO.findAll();
  return rows.map(row => new Customer(row));
};

exports.getById = async (id) => {
  const row = await customerDAO.findById(id);
  if (!row) throw { status: 404, message: 'Customer not found' };
  return new Customer(row);
};

exports.create = async (data) => {
  const result = await customerDAO.create(data);
  return new Customer(result);
};

exports.update = async (id, data) => {
  await exports.getById(id); // check existence
  const updated = await customerDAO.update(id, data);
  return new Customer(updated);
};

exports.remove = async (id) => {
  await exports.getById(id); // check existence
  await customerDAO.remove(id);
};
