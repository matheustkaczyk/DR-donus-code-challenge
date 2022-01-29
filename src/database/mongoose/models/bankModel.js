const mongoose = require('mongoose');
const clientSchema = require('../schemas/clientSchema');

const Bank = mongoose.model('Bank', clientSchema);

module.exports = Bank;
