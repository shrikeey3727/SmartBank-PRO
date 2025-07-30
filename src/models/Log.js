class Log {
  constructor({ id, action, user_id, created_at }) {
    this.id = id;
    this.action = action;
    this.userId = user_id;
    this.createdAt = created_at;
  }

  toJSON() {
    return {
      id: this.id,
      action: this.action,
      userId: this.userId,
      createdAt: this.createdAt,
    };
  }
}

module.exports = Log;
