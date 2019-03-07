var mongoose = require('mongoose');

var Option = require('./option.model')

var SceneSchema = new mongoose.Schema({
    sceneNumber: Number,
    text: String,
    options: [Option.Schema]
});

module.exports = mongoose.model('Scene', SceneSchema)