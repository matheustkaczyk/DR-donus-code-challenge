

const clientController = async (req, res) => {
  try {
    const { name, cpf } = req.body;
    
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { clientController };
