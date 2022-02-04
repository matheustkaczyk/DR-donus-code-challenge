const clientsModel = require('../../database/models/clientsModel');

const createClient = async (fullName, cpf) => {
  try {
    const creating = await clientsModel.create({ fullName, cpf, balance: 0 });
    return creating;
  } catch (error) {
    throw new Error(error);
  }
};

const getClient = async (cpf) => {
  try {
    const getClient = await clientsModel.find({ cpf });
    return getClient;
  } catch (error) {
    return error;
  }
};

const balanceClient = async (cpf, quantity) => {
  try {
    const depositing = await clientsModel.findOneAndUpdate({ cpf }, { balance: quantity });
    return depositing;
  } catch (error) {
    return error;
  }
};

module.exports = { createClient, getClient, balanceClient };
