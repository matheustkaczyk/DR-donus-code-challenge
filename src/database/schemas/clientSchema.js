const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bank');

const clientSchema = new mongoose.Schema({
  fullName: String,
  cpf: String,
  balance: Number,
})

module.exports = clientSchema;
