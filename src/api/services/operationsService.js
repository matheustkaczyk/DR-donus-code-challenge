const { depositClient } = require('../../database/models/clientsModel');

const depositService = async (cpf, quantity) => {
  try {
    await depositClient(cpf, quantity);
  } catch (error) {
    return error;
  }
};

module.exports = { depositService };
