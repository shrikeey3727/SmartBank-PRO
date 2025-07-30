const customerService = require('../services/customer.service');

exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await customerService.getAll();
    res.json(customers);
  } catch (err) {
    next(err);
  }
};

exports.getCustomerById = async (req, res, next) => {
  try {
    const customer = await customerService.getById(req.params.id);
    res.json(customer);
  } catch (err) {
    next(err);
  }
};

exports.createCustomer = async (req, res, next) => {
  try {
    const newCustomer = await customerService.create(req.body);
    res.status(201).json(newCustomer);
  } catch (err) {
    next(err);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const updated = await customerService.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    await customerService.remove(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
