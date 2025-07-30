// src/middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error('[ERROR]', err);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
