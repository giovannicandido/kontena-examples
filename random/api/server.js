'use strict';

const express = require('express');

// Constants
const PORT = 50000;
const CONTAINER_ID = process.env.HOSTNAME || Math.floor(Math.random() * 100)
// App
const app = express();
app.get('/', function (req, res) {
  res.send('I\'m the container ' + CONTAINER_ID +'\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);