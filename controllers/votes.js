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

    if(userIds.includes(user.id.toString())) {
        return res.status(400).json({ error: 'You can vote only once' });
    }

    if(body.first.toString() === body.second.toString() || body.first.toString() === body.third.toString() || body.third.toString() === body.second.toString()) {
        return res.status(400).json({ error: 'You naughty boy'});
    }


    const vote = new Vote(body);

    vote.user = user;

    //Update players votes
    const first = await Player.findOne({ name: body.first });
    first.votes = first.votes + 3;
    await Player.findByIdAndUpdate(first._id, first, { new: true });

    const second = await Player.findOne({ name: body.second });
    second.votes = second.votes + 2;
    await Player.findByIdAndUpdate(second._id, second, { new: true });

    const third = await Player.findOne({ name: body.third });
    third.votes = third.votes + 1;
    await Player.findByIdAndUpdate(third._id, third, { new: true });
    

    const savedVote = await vote.save();

    res.status(201).json(savedVote);
});

voteRouter.get('/', async(req, res) => {
    const votes = await Vote.find({}).populate('user');
    return res.json(votes.map(v => v.toJSON()));
})

module.exports = voteRouter;