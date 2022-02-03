const { depositService } = require('../services/operationsService');

const deposit = async (req, res) => {
  try {
    const { quantity } = req.params;
    const { cpf } = req.user;

    await depositService(cpf, quantity);
    res.status(200).end();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { deposit };
