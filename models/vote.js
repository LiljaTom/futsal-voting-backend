const mongoose = require('mongoose');

const voteSchema = mongoose.Schema({
    threePoints: {
        type: Number,
        required: true
    },
    twoPoints: {
        type: Number,
        required: true
    },
    onePoint: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

voteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;