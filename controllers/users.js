const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');


// Creating a new user
usersRouter.post('/', async(req, res) => {
    const body = req.body;

    if(!body.password || body.password.length < 3) {
        return res.status(400).send({ error: 'Password missing or under 3 length' });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
        name: body.name,
        username: body.username,
        passwordHash
    });

    const savedUser = await user.save();

    res.json(savedUser);
});

//Getting all users
usersRouter.get('/', async(_req, res) => {
    const users = await User.find({});
    res.json(users.map(u => u.toJSON()));
});





module.exports = usersRouter;
