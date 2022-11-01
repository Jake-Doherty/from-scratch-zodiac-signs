const { Router } = require('express');
const { zodiacSigns } = require('../zodiac-data.js');

module.exports = Router()
  .get('/:id', (req, res) => {
    let match;
    for (const zSign of zodiacSigns) {
      if (zSign.id === req.params.id) {
        match = zSign;
      }
    }
    console.log('detail console.log', match);
    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];

    for (const zSign of zodiacSigns) {
      filteredData.push({ id: zSign.id, name: zSign.name });
    }
    console.table(filteredData);
    res.json(filteredData);
  });
