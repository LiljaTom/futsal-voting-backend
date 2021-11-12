const jwt = require('jsonwebtoken');
const voteRouter = require('express').Router();

const Player = require('../models/player');
const Vote = require('../models/vote');
const User = require('../models/user');

voteRouter.post('/', async(req, res) => {
    const body = req.body;
    const decodedToken = jwt.verify(req.token, process.env.SECRET);

    //Checking the token
    if(!decodedToken || !req.token) {
        return res.status(401).json({ error: 'Token invalid or missing' });
    }

    const user = await User.findById(decodedToken.id);

    //You can make only one vote
    const votes = await Vote.find({});
    const userIds = votes.map(v => v.user.toString());

    if(userIds.contains(user.id.toString())) {
        return res.status(400).json({ error: 'You can vote only once' });
    }


    const vote = new Vote(body);
    const user = await User.findById(decodedToken.id);

    vote.user = user;

    //Update players votes
    const first = await Player.findOne({ name: body.first });
    first.votes = first.votes + 3;
    await first.save();

    const second = await Player.findOne({ name: body.second });
    second.votes = second.votes + 2;
    await second.save();

    const third = await Player.findOne({ name: body.third });
    third.votes = third.votes + 1;
    await third.save();
    

    const savedVote = await vote.save();

    //Update user
    user.vote = savedVote._id;
    await user.save();


    res.status(201).json(savedVote);
});

voteRouter.get('/', async(req, res) => {
    const votes = await Vote.find({});
    return res.json(votes.map(v => v.toJSON()));
})

module.exports = voteRouter;