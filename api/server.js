const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoute = require('../routes/auth.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', authRoute);

module.exports = server;