var mongoose = require('mongoose');

var ApropSchema = require('../schemas/aprop');

var Aprop = mongoose.model('Aprop', ApropSchema);

module.exports = Aprop;
