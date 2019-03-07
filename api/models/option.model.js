var mongoose = require('mongoose');

var OptionSchema = new mongoose.Schema({
    optionNumber: Number,
    text: String
});

module.exports = mongoose.model('Option', OptionSchema)