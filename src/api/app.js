const express = require('express');

const app = express();

const clientValidation = require('./middlewares/clientValidation');
const depositValidation = require('./middlewares/depositValidation');
const jwtValidation = require('./middlewares/jwtValidation');

const { clientCreation, clientLogin } = require('./controllers/clientController');
const { deposit } = require('./controllers/operationsController');

app.use(express.json());

app.post('/login', clientLogin);
app.post('/client', jwtValidation, clientValidation, clientCreation)
app.post('/client/:quantity', jwtValidation, depositValidation, deposit);

app.get('/', (_req, res) => res.status(200).end());

module.exports = app;
