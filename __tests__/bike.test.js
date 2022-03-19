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



  it('create a new bike', async () => {
    const expected = {
      condition: 'mint',
      color: 'blue',
      miles: 400,
    };
    const res = await request(app).post('/api/v1/bikes').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });

  });



  it('get all bikes', async () => {
    const res = await request(app).get('/api/v1/bikes');
    expect(res.body).toEqual(expect.arrayContaining([]));
  });


  it('get a specific bike', async () => {
    const expected = {
      id: '1',
      condition: 'mint',
      color: 'blue',
      miles: 400,
    };
    const res = await request(app).get('/api/v1/bikes/1');
    expect(res.body).toEqual(expected);
  });


  it('updates a specific bike', async () => {
    const expected = {
      id: '1',
      condition: 'mint',
      color: 'blue',
      miles: 400,
    };
    const res = await request(app).patch('/api/v1/bikes/1').send({ condition: 'mint' });
    expect(res.body).toEqual(expected);

  });

  it('deletes a specific bike', async () => {
    const expected = {
      id: '1',
      condition: 'mint',
      color: 'blue',
      miles: 400,
    };
    const res = await request(app).delete('/api/v1/bikes/1');
    expect(res.body).toEqual(expected);
  });


});

