const jwt = require("jsonwebtoken");
const secrets = require("../database/secrets");
const Books = require("../helpers/bookr-model");

async function validateId(req, res, next) {
  const { id } = req.params
  const book = await Books.findById(id);
    try {
  if(book){
  req.book = book;
  next();
  } else {
    res.status(400).json({ message: 'invalid Id '})
  }
  } catch (error) {
  res.status(500).json({ errorMessage: 'request dont could process'})
  }
  }

  function authenticate(req, res, next) {
    const token = req.get("Authorization");
  
    if (token) {
      jwt.verify(token, jwtKey, (err, decoded) => {
        if (err) return res.status(401).json(err);
  
        req.decoded = decoded;
  
        next();
      });
    } else {
      return res.status(401).json({
        error: 'No token provided, must be set on the Authorization Header',
      });
    }
  }

 function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
} 

module.exports = {
  authenticate,
  validateId,
  generateToken
};
