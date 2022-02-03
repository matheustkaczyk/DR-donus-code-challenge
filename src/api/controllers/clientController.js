const { createClientService, loginClientService } = require('../services/clientService');
const jwtSignature = require('../middlewares/jwtSignature');

const clientCreation = async (req, res) => {
  try {
    const { fullName, cpf } = req.body;

    await createClientService(fullName, cpf);
    return res.status(201).end();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const clientLogin = async (req, res) => {
  try {
    const { fullName, cpf } = req.body;

    const user = await loginClientService(fullName, cpf);

    return res.status(200).json(jwtSignature(user));
  } catch (error) {
    return res.status(400).end();
  }
};

module.exports = { clientCreation, clientLogin };
