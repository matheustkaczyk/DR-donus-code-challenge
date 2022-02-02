const { createClient, getClient } = require('../models/clientModel');

const createClientService = async (fullName, cpf) => {
  const alreadyExists = await getClient(fullName, cpf);

  if (alreadyExists.length > 0) throw new Error(`User already exists`);

  const creating = await createClient(fullName, cpf);

  return creating;
};

module.exports = { createClientService };