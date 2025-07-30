class Account {
  constructor({ id, customer_id, balance, type, created_at }) {
    this.id = id;
    this.customerId = customer_id;
    this.balance = balance;
    this.type = type;
    this.createdAt = created_at;
  }

  isOverdrawn() {
    return this.balance < 0;
  }

  toJSON() {
    return {
      id: this.id,
      customerId: this.customerId,
      balance: this.balance,
      type: this.type,
      createdAt: this.createdAt,
    };
  }
}

module.exports = Account;
