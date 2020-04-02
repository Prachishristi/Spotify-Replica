const mongoose = require('mongoose');
//const Song = require('./addSong/Song')
const songSchema = mongoose.Schema({
    songName: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    avgRating: {
        type: Number,
        required: true
    }
}
);
const song = mongoose.model('song', songSchema);
module.exports = song;