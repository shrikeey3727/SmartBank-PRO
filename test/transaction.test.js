const { api } = require('./config');
const { expect } = require('chai');

describe('Transaction API', () => {
  let customerId, accountId;

  before(async () => {
    const cust = await api.post('/api/customers').send({ name: 'Trans User', email: 'trans@bank.com' });
    customerId = cust.body.id;

    const acc = await api.post('/api/accounts').send({
      customerId,
      balance: 10000,
      type: 'savings',
    });
    accountId = acc.body.id;
  });

  it('should create a debit transaction', async () => {
    const res = await api.post('/api/transactions').send({
      accountId,
      amount: 1000,
      type: 'debit',
    });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('amount', 1000);
  });

  it('should fetch all transactions', async () => {
    const res = await api.get('/api/transactions');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  after(async () => {
    await api.delete(`/api/accounts/${accountId}`);
    await api.delete(`/api/customers/${customerId}`);
  });
});
