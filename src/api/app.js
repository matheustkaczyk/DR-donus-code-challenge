const express = require('express');

const app = express();

const clientValidation = require('./middlewares/clientValidation');

const { clientCreation } = require('./controllers/clientController');

app.use(express.json());

app.post('/client', clientValidation, clientCreation)
app.post('/client/:quantity')

app.get('/', (_req, res) => res.status(200).end());

module.exports = app;
