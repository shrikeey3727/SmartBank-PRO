const { api } = require('./config');
const { expect } = require('chai');

describe('Account API', () => {
  let customerId;
  let accountId;

  before(async () => {
    const res = await api.post('/api/customers').send({ name: 'User X', email: 'x@bank.com' });
    customerId = res.body.id;
  });

  it('should create an account', async () => {
    const res = await api.post('/api/accounts').send({
      customerId,
      balance: 5000,
      type: 'savings',
    });

    expect(res.status).to.equal(201);
    accountId = res.body.id;
  });

  it('should fetch all accounts', async () => {
    const res = await api.get('/api/accounts');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should fetch account by ID', async () => {
    const res = await api.get(`/api/accounts/${accountId}`);
    expect(res.status).to.equal(200);
  });

  after(async () => {
    await api.delete(`/api/accounts/${accountId}`);
    await api.delete(`/api/customers/${customerId}`);
  });
});
