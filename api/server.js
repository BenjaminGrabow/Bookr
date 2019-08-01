const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoute = require('../routes/auth-router');
const bookRoute = require('../routes/book-router');
const stripeRoute = require('../routes/stripe-router');
const userPreferenceRoute = require('../routes/user-preference-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRoute);
server.use('/', bookRoute);
server.use('/', stripeRoute);
server.use('/', userPreferenceRoute);

module.exports = server;