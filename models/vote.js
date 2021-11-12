const mongoose = require('mongoose');

const voteSchema = mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    second: {
        type: String,
        required: true
    },
    third: {
        type: String,
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