const express = require('express');
require('express-async-errors');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');


// Utils
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');

// Router imports
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const playersRouter = require('./controllers/players');
const voteRouter = require('./controllers/votes');
const resetRouter = require('./controllers/reset');


logger.info('connecting to', config.MONGODB_URI);


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger.info('connected to MongoDB');
    })
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message);
    });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

// Routes
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/players', playersRouter);
app.use('/api/votes', voteRouter);
app.use('/api/billGates', resetRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
