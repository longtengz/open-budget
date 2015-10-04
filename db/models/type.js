var mongoose = require('mongoose');

var TypeSchema = require('../schemas/type');

var Type = mongoose.model('Type', TypeSchema);

module.exports = Type;
