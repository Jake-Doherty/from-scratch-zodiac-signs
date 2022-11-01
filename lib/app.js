const express = require('express');

const app = express();

app.use('/zodiacs', require('./controllers/zodiacs.js'));
app.use('/horoscopes', require('./controllers/horoscopes.js'));

app.use('/', (req, res) => {
  res.send('hello world!');
});

module.exports = app;
