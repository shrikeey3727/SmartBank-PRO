const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');

router.get('/summary', reportController.getBankSummary);
router.get('/customer/:id', reportController.getCustomerReport);

module.exports = router;
