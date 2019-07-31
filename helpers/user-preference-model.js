const db = require("../database/dbConfig.js");

module.exports = {
  addUserPreference,
  findUserPreferences,
  findById,
  findByUserId,
  updateUserPreferenceById,
};

async function addUserPreference(userPreference) {
  const [id] = await db("user_preference").insert(userPreference);

  return findById(id);
}

function findByUserId(id) {
  return db("user_preference")
    .where('user_id', id);
}

function updateUserPreferenceById({user_id, first_name, lastname, photo}, id) {
  return db('user_preference')
    .where('user_id', id )
    .update({user_id, first_name, lastname, photo});
};