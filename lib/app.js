const express = require('express');

const app = express();

app.use('/zodiacs', require('./controllers/zodiacs.js'));

app.use('/', (req, res) => {
  res.send('hello world!');
});

module.exports = app;
