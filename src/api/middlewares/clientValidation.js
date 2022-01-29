const clientSchema = require('../validations/joi/clientSchema');

const clientValidation = (req, res, next) => {
  try {
    const { fullName, cpf } = req.body;
  
    clientSchema.validate(fullName, cpf);
    next();
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = clientValidation;
