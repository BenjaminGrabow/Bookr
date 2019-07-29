const bcrypt = require("bcryptjs");

const Users = require("../helpers/users-model.js");

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
};

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 5);
  user.password = hash;
  Users.add(user)
    .then(saved => {
      const token = tokenService.generateToken(user);
      res.status(201).json({ saved, token: token });
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

function login(req, res) {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenService.generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token,
         });
      } else {
         res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}