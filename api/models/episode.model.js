var mongoose = require('mongoose');

var EpisodeSchema = new mongoose.Schema({
    episodeNumber: Number,
    title: String,
    Scenes: [
        {
            sceneNumber: Number,
            text: String,
            options: [
                {
                    optionNumber: Number,
                    text: String
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Episode', EpisodeSchema)