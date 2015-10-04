var mongoose = require('mongoose');

var FundSchema = new mongoose.Schema({
    item: String,
    fcoa: String,
    anticipated: Number,
    realized: Number,
    year: Number
});

module.exports =FundSchema;
