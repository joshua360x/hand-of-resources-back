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

  it('creates a Car', async () => {
    const expected = {
      make: 'ford',
      model: 'fusion',
      year: 2000,
    };
    const res = await request(app).post('/api/v1/cars').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });

  it('gets all cars', async () => {
    const res = await request(app).get('/api/v1/cars');
    expect(res.body).toEqual(expect.arrayContaining([]));
  });

  it('gets a specific car', async () => {
    const res = await request(app).get('/api/v1/cars/1');
    const expected = {
      id: '1',
      make: 'ford',
      model: 'fusion',
      year: 2000,
    };
    expect(res.body).toEqual(expected);
  });
});
