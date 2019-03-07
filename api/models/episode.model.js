var mongoose = require('mongoose');

var Scene = require('./scene.model.js');

var EpisodeSchema = new mongoose.Schema({
    episodeNumber: Number,
    title: String,
    scenes: [Scene.schema]
});

module.exports = mongoose.model('Episode', EpisodeSchema)