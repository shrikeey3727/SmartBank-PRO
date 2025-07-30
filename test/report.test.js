const { api } = require('./config');
const { expect } = require('chai');

describe('Report API', () => {
  it('should fetch bank summary', async () => {
    const res = await api.get('/api/reports/summary');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('totalCustomers');
  });
});
