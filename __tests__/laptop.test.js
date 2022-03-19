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

  it('create a new Laptop', async () => {
    const expected = {
      madeIn: 'US',
      software: 'Mac OS',
      yearReleased: 2001,
    };
    const res = await request(app).post('/api/v1/laptops').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });

  it('get all laptops', async () => {
    const res = await request(app).get('/api/v1/laptops');
    const expected = {
      id: '1',
      madeIn: 'US',
      software: 'Mac OS',
      yearReleased: 2001,
    };
    expect(res.body).toEqual([expected]);
  });

  it('gets a specific laptop', async () => {
    const expected = {
      id: '1',
      madeIn: 'US',
      software: 'Mac OS',
      yearReleased: 2001,
    };
    const res = await request(app).get('/api/v1/laptops/1');
    expect(res.body).toEqual(expected);
  });

  it('updates a specific laptop', async () => {
    const expected = {
      id: '1',
      madeIn: 'US',
      software: 'Mac OS',
      yearReleased: 2001,
    };
    const res = await request(app).patch('/api/v1/laptops/1').send({ software: 'Mac OS' });

    expect(res.body).toEqual(expected);
  });

  it('deletes a specific laptop', async () => {
    const expected = {
      id: '1',
      madeIn: 'US',
      software: 'Mac OS',
      yearReleased: 2001,
    };
    const res = await request(app).delete('/api/v1/laptops/1');
    expect(res.body).toEqual(expected);
  });
});
