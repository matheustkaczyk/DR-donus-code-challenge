const express = require('express');

const app = express();

const clientValidation = require('./middlewares/clientValidation');

const { clientController } = require('./controllers/clientController');

app.get('/client', clientValidation, clientController)

app.get('/', (_req, res) => res.status(200).end());

module.exports = app;
