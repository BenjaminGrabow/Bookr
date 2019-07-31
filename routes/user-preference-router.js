const router = require('express').Router();

const UserPreference = require('../helpers/user-preference-model.js');

router.get('/user', async (req, res) => {
  
  try {
    const userPreferences = await UserPreference.findUserPreferences();
    
  res.status(200).json(userPreferences);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the preferences' });
  }
});

router.get("/user/:id", async (req, res) => {
  const getUserPreference = await UserPreference.findById(req.params.id)
  try {
    if(getUserPreference) {
        res.status(200).json(getUserPreference);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

router.post("/user", async (req, res) => {
  const request = req.body;
  
  try {
    if (request.first_name &&
      request.last_name &&
      request.photo) {
        const newUserPreference = await UserPreference.addUserPreference(request); 
        res.status(200).json(newUserPreference);
    } else {
      res.status(400).json({ message: 'You must provide at least first name, last name and photo !' })
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'request dont could process' })
  }
});

// router.put("/:id",validatePutId, (req, res) => {
//       res.status(200).json(req.book);
// });


  module.exports = router;