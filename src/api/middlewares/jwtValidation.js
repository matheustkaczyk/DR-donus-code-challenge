const jwt = require('jsonwebtoken');

const secretPassword = 'secret_key';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  };
  
  try {
    const validation = jwt.verify(token, secretPassword);
    req.user = validation;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateJWT };