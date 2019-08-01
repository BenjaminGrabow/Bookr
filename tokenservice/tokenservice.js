const jwt = require("jsonwebtoken");
const secrets = require("../database/secrets");

function generateToken(user) {
  console.log(secrets.jwtSecret);
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
  generateToken
};