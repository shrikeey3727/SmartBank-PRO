const { api } = require('./config');
const { expect } = require('chai');

describe('Customer API', () => {
  let customerId;

  it('should create a new customer', async () => {
    const res = await api.post('/api/customers').send({
      name: 'Shrikee Test',
      email: 'shrikee@example.com',
    });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    customerId = res.body.id;
  });

  it('should fetch all customers', async () => {
    const res = await api.get('/api/customers');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should fetch customer by ID', async () => {
    const res = await api.get(`/api/customers/${customerId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', customerId);
  });

  it('should update customer', async () => {
    const res = await api.put(`/api/customers/${customerId}`).send({
      name: 'Updated Shrikee',
      email: 'updated@example.com',
    });
    expect(res.status).to.equal(200);
  });

  it('should delete customer', async () => {
    const res = await api.delete(`/api/customers/${customerId}`);
    expect(res.status).to.equal(204);
  });
});
