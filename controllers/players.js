const jwt = require('jsonwebtoken');
const playerRouter = require('express').Router();

const Player = require('../models/player');
const User = require('../models/user');

playerRouter.post('/', async(req, res) => {
    const body = req.body;
    const decodedToken = jwt.verify(req.token, process.env.SECRET);

    //Checking the token
    if(!decodedToken || !req.token) {
        return res.status(401).json({ error: 'Token invalid or missing' });
    }

    const player = new Player(body);
    player.votes = 0;

    const user = await User.findById(decodedToken.id);
    player.user = user;

    const savedPlayer = await player.save();

    user.players = user.players.concat(savedPlayer._id);
    await user.save();

    res.status(201).json(savedPlayer);
});

playerRouter.get('/', async(req, res) => {
    const players = await Player.find({});
    return res.json(players.map(p => p.toJSON()));
});

module.exports = playerRouter;