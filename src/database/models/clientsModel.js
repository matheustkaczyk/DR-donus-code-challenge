const mongoose = require('mongoose');
const clientSchema = require('../schemas/clientSchema');

const Clients = mongoose.model('Clients', clientSchema);

module.exports = Clients;
