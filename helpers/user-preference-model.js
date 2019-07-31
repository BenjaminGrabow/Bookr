const db = require("../database/dbConfig.js");

module.exports = {
  addUserPreference,
  findUserPreferences,
  findById,
  findByUserId,
  updateUserPreferenceById,
};

function findUserPreferences() {
  return db("user_preference");
}

async function addUserPreference(userPreference) {
  const [id] = await db("user_preference").insert(userPreference);

  return findById(id);
}

function findById(id) {
  return db("user_preference")
    .where({ id });
}


function findByUserId(user_id) {
  return db("user_preference")
    .where({ user_id });
}

function updateUserPreferenceById({ username, password, photo, first_name, last_name }, id) {
  return db('users')
    .where({ user_id })
    .update({ username, password, photo, first_name, last_name });
};