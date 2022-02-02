const clientController = async (req, res) => {
  try {
    return res.status(200).end();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { clientController };
