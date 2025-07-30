// src/utils/formatter.js
exports.toCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

exports.formatDate = (date) => {
  return new Date(date).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });
};

exports.maskEmail = (email) => {
  const [name, domain] = email.split('@');
  return `${name[0]}****@${domain}`;
};
