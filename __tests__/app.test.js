const request = require('supertest');
const app = require('../lib/app');

const { zodiacSigns } = require('../lib/zodiac-data');

// describe('example test - you should probably update me', () => {
//   it('home route should return hello world', async () => {
//     const resp = await request(app).get('/');
//     expect(resp.text).toEqual('hello world!');
//   });
// });

describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacSigns.map((zSign) => {
      return { id: zSign.id, name: zSign.name };
    });
    expect(res.body).toEqual(expected);
  });
});
