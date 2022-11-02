const { Router } = require('express');
const { horoscopes } = require('../horoscope-data.js');

module.exports = Router().get('/:name', (req, res) => {
  let match;
  for (const hScope of horoscopes) {
    if (hScope.name === req.params.name) {
      match = hScope;
    }
  }
  return res.json(match);
});
