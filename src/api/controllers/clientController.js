const { createClientService, loginClientService } = require('../services/clientService');
const jwtSignature = require('../middlewares/jwtSignature');

const clientCreation = async (req, res) => {
  try {
    const { fullName, cpf } = req.body;

    await createClientService(fullName, cpf);
    return res.status(201).json({ message: 'User successfully created' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const clientLogin = async (req, res) => {
  try {
    const { fullName, cpf } = req.body;

    const loginRequest = await loginClientService(cpf);
    const { balance } = loginRequest[0];

    return res.status(200).json(jwtSignature({ fullName, cpf, balance }));
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { clientCreation, clientLogin };
