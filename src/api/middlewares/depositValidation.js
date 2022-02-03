const depositValidation = (req, res, next) => {
  try {
    const { quantity } = req.params;
  
    if (!quantity || quantity === 0) throw new Error(`Invalid quantity`);
    
    if (quantity > 2000) throw new Error(`Transactions above 2000 are not allowed`);

    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = depositValidation;
