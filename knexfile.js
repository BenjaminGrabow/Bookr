require('dotenv').config(); // load .env variables
var pg = require('pg');
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   }
    // },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seed"
    }
  }
};
