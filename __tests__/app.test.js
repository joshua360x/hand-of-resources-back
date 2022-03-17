const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('hand-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });



  it('creates a new animal to the dataBase', async () => {
    const expected = {
      name: 'tie',
      type: 'zebra',
      mood: 'caring',
      sound: 'oink'
    };
    const res = await request(app).post('/api/v1/animals').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });


});
