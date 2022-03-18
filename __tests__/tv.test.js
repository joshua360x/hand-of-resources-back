const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('hand-resources routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('create a new TV', async () => {
    const expected = {
      type: 'LED',
      brand: 'Samsung',
      size: 40,
    };
    const res = await request(app).post('/api/v1/tvs').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });

  it('get all TVs', async () => {
    const res = await request(app).get('/api/v1/tvs');
    expect(res.body).toEqual(expect.arrayContaining([]));
  });

  it('get a particular TV', async () => {
    const expected = {
      id: '1',
      type: 'LED',
      brand: 'Samsung',
      size: 40,
    };
    const res = await request(app).get('/api/v1/tvs/1');
    expect(res.body).toEqual(expected);
  });

  it('update a particular TV', async () => {
    const expected = {
      id: '1',
      type: 'LED',
      brand: 'Samsung',
      size: 40,
    };
    const res = await request(app).patch('/api/v1/tvs/1').send({ type: 'LED' });

    expect(res.body).toEqual(expected);
  });

  it('delete a particular TV', async () => {
    const expected = {
      id: '1',
      type: 'LED',
      brand: 'Samsung',
      size: 40,
    };
    const res = await request(app).delete('/api/v1/tvs/1');
    expect(res.body).toEqual(expected);
  });
});
