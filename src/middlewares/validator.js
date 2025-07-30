// src/middlewares/validator.js
module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        details: err.details || err.message,
      });
    }
  };
};
