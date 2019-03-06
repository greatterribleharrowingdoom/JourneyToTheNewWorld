var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var yoIDKTestSchema = new Schema({
    name: {
        type: String,
        required: 'This is a name, change it'
    }
});

module.exports = mongoose.model('Testing', yoIDKTestSchema)