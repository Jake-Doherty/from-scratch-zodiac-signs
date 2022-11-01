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

  it('/zodiac/:id should return a zodiac sign detail', async () => {
    const res = await request(app).get('/zodiacs/1');

    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
});
