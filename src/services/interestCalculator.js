exports.calculateInterest = (balance, rate = 0.04, durationInMonths = 12) => {
  const interest = balance * rate * (durationInMonths / 12);
  return parseFloat(interest.toFixed(2));
};
