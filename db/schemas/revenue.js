var mongoose = require('mongoose');

var RevenueSchema = new mongoose.Schema({
    item: String,
    type: {type: Number, ref: "Type"},
    fcoa: String,
    anticipated: Number,
    realized: Number,
    year: Number
});

module.exports = RevenueSchema;
