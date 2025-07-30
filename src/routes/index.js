// src/routes/index.js
const express = require('express');
const router = express.Router();

router.use('/customers', require('./customer.routes'));
router.use('/accounts', require('./account.routes'));
router.use('/transactions', require('./transaction.routes'));
router.use('/reports', require('./report.routes'));
router.use('/auth', require('./auth.routes'));

module.exports = router;
