const { depositClient, getClient } = require('../models/clientModel');

const depositService = async (cpf, quantity) => {
  try {
    const client = await getClient(cpf);
    const { balance } = client[0];
    const newCurrency = balance + Number(quantity);
    const depositing = await depositClient(cpf, newCurrency);
    return depositing;
  } catch (error) {
    return error;
  }
};

module.exports = { depositService };
