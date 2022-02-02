const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  fullName: String,
  cpf: Number,
  balance: Number,
})

module.exports = clientSchema;
