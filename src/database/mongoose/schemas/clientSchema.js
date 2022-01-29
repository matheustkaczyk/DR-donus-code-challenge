const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  cpf: Number,
  balance: Number,
})

module.exports = clientSchema;
