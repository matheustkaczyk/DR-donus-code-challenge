const clientsModel = require('../../database/models/clientsModel');

const createClient = async (fullName, cpf) => {
  try {
    const creating = await clientsModel.create({ fullName, cpf });
    return creating;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createClient };
