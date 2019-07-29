const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoute = require('../routes/auth-router');
const bookRoute = require('../routes/book-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', authRoute);
server.use('/', bookRoute);

server.get('/', (req, res) => {
  console.log("We are live !!!")
});

module.exports = server;