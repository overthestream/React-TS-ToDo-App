import { createConnection } from 'typeorm';

import request = require('supertest');
import app = require('../../app');

describe('GET /items', () => {
  it('connect to DB', (done) => {
    try {
      createConnection();
      console.log('connected');
    } catch (err) {
      console.log(err);
    }
    done();
  });
  it('should return to do items & 200 status code', async (done) => {
    request(app)
      .get('/items')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
});
