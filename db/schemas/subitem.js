var mongoose = require('mongoose');

var SubitemSchema = new mongoose.Schema({
    _id: Number,
    text: String
});

module.exports = SubitemSchema;
