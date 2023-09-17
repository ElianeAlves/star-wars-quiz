const express = require('express');
const router = require('./router')
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
  }));

app.use(express.json())
app.use(router)

app.get('/', (request, response) => response.status(200).send('st 2'))

module.exports = app