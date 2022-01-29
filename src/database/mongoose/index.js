const mongoose = require('mongoose');

const connection = async () => {
  await mongoose.connect('mongodb://localhost:27017/bank');
};

module.exports = connection;
