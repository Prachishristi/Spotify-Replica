const mongoose = require('mongoose');

const artistSchema = mongoose.Schema(
    {
        artistName: {
            type: String,
            require: true
        },
        dob: {
            type: Date,
            require: true
        },
        rating:
        {
            type: Number,
            require: true
        }
    }
);

const artist = mongoose.model('artist', artistSchema);

module.exports = artist;
