const { createClientService } = require('../services/clientService');

const clientController = async (req, res) => {
  try {
    const { fullName, cpf } = req.body;

    await createClientService(fullName, cpf);
    return res.status(201).end();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { clientController };
