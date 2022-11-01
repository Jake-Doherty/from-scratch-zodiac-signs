const { Router } = require('express');
const { zodiacSigns } = require('../zodiac-data.js');

module.exports = Router().get('/', (req, res) => {
  const filteredData = [];

  for (const zSign of zodiacSigns) {
    filteredData.push({ id: zSign.id, name: zSign.name });
  }
  console.table(filteredData);
  res.json(filteredData);
});
