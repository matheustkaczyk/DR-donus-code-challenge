const { depositService, transferService } = require('../services/operationsService');

const deposit = async (req, res) => {
  try {
    const { quantity } = req.params;
    const { cpf } = req.user;

    const depositing = await depositService(cpf, quantity);
    res.status(200).json(depositing);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const transfer = async (req, res) => {
  try {
    const { quantity, targetCpf } = req.params;
    const loggedUser = req.user;

    const transfering = await transferService(loggedUser, targetCpf, quantity);
    res.status(200).json(transfering);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { deposit, transfer };
