const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const apiRouters = require('./routers');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (_, response) => {
  response.json({
    message: `Welcome to SmartService`,
    version: config.appVersion,
    environment: config.environment
  });
});

app.use('/api', apiRouters(express.Router()));

module.exports = app;
