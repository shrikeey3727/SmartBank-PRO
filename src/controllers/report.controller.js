const reportService = require('../services/report.service');

exports.getBankSummary = async (req, res, next) => {
  try {
    const summary = await reportService.getSummary();
    res.json(summary);
  } catch (err) {
    next(err);
  }
};

exports.getCustomerReport = async (req, res, next) => {
  try {
    const report = await reportService.getCustomerReport(req.params.id);
    res.json(report);
  } catch (err) {
    next(err);
  }
};
