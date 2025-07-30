class Customer {
  constructor({ id, name, email, created_at }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = created_at;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
    };
  }
}

module.exports = Customer;
