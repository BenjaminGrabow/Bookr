const db = require("../database/dbConfig.js");

module.exports = {
  addUserPreference,
  findUserPreferences,
  findBy,
  findById,
  updateUserPreferenceById,
};

function findUserPreferences() {
  return db("user_preference").select("id", "first_name");
}

async function addUserPreference(userPreference) {
  const [id] = await db("user_preference").insert(userPreference);

  return findById(id);
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

const updateUserPreferenceById = ({ username, password, photo, first_name, last_name }, id) => {
  return db('users')
    .where({ id })
    .update({ username, password, photo, first_name, last_name });
};