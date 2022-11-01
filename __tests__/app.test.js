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

  it('/zodiacs/:id should return a zodiac sign detail', async () => {
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

describe('horoscope routes', () => {
  it('/horoscopes/:sign should return a horoscope for the given sign', async () => {
    const res = await request(app).get('/horoscopes/virgo');

    const virgo = {
      id: '12',
      name: 'virgo',
      horoscope:
        'Distractions will find you easily this morning, darling Virgo, as the Aquarius moon forms a harsh t-square with the nodes of fate. Do your best to stay aligned with your tasks and typical routine, or you could become overwhelmed by stress later. Watch out for disorganization later in the afternoon when Luna squares off with wildcard Uranus, which could cause you to get lost in a daydream or two. If you can swing a little reprieve from your work responsibilities, this might be a good time to get in a little walk or meditation session before clocking out for the day.',
    };
    expect(res.body).toEqual(virgo);
  });
});
