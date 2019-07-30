const db = require("../database/dbConfig.js");

 module.exports = {
    add,
    find,
    findBy,
    findById,
    updateUserById,
    remove
  };

   function find() {
    return db("users").select("id", "username");
  }

   function findBy(filter) {
    return db("users").where(filter);
  }

   async function add(user) {
    const [id] = await db("users").insert(user);

     return findById(id);
  }

   function findById(id) {
    return db("users")
      .select("id", "username")
      .where({ id })
      .first();
  }

  const updateUserById = ({ username, password, photo, first_name, last_name }, id) => {
    return db('users')
    .where({ id })
    .update({ username, password, photo, first_name, last_name });
  };

  function remove(id) {
    return db('users').where({ id }).delete();
  }