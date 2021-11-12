const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    votes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

playerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

playerSchema.plugin(uniqueValidator);
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;