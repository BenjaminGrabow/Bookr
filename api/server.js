const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoute = require('../routes/auth-router');
const bookRoute = require('../routes/book-router');
const stripeRoute = require('../routes/stripe');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRoute);
server.use('/', bookRoute);
server.use('/', stripeRoute);

module.exports = server;