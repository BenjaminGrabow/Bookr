const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../routes/routes.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

configureRoutes(server);

module.exports = server;