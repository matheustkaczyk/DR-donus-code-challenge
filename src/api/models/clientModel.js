const clientsModel = require('../../database/models/clientsModel');

const createClient = async (fullName, cpf) => {
  try {
    const creating = await clientsModel.create({ fullName, cpf, balance: 0 });
    return creating;
  } catch (error) {
    throw new Error(error);
  }
};

const getClient = async (fullName, cpf) => {
  try {
    const getClient = await clientsModel.find({ fullName, cpf });
    return getClient;
  } catch (error) {
    return error;
  }
};

const depositClient = async (quantity) => {
  try {
    
  } catch (error) {
    return error;
  }
};

module.exports = { createClient, getClient };
