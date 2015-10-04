var mongoose = require('mongoose');

var TypeSchema = new mongoose.Schema({
    _id: Number,
    text: String
});

module.exports = TypeSchema;
