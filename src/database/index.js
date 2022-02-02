const mongoose = require('mongoose');

const connection = async () => {
  return await mongoose.connect('mongodb://localhost:27017/bank');
};

module.exports = connection;
