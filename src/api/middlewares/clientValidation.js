const clientSchema = require('../validations/joi/clientSchema');

const clientValidation = (req, res, next) => {
  try {
      const { fullName, cpf } = req.body;
    
      const validation = clientSchema.validate({ fullName, cpf });

      if (validation.error) throw new Error(validation.error.details[0].message);
  
      next();
      
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

module.exports = clientValidation;
