async function validateId(req, res, next) {
  const { id } = req.params
  const hub = await Hubs.findById(id);
    try {
  if(hub){
  req.hub = hub;
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

module.exports = {
  authenticate,
  validateId
};
