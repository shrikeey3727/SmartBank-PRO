class Transaction {
  constructor({ id, account_id, amount, type, timestamp }) {
    this.id = id;
    this.accountId = account_id;
    this.amount = amount;
    this.type = type;
    this.timestamp = timestamp;
  }

  isCredit() {
    return this.type === 'credit';
  }

  toJSON() {
    return {
      id: this.id,
      accountId: this.accountId,
      amount: this.amount,
      type: this.type,
      timestamp: this.timestamp,
    };
  }
}

module.exports = Transaction;
