const jwt = require('jsonwebtoken');
const resetRouter = require('express').Router();

const Player = require('../models/player');
const Vote = require('../models/vote');
const User = require('../models/user');

resetRouter.post('/', async(req, res) => {
    await Player.deleteMany({});
    await Vote.deleteMany({});
    await User.deleteMany({});

    res.status(204).end();
});

module.exports = resetRouter;
