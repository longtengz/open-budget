var mongoose = require('mongoose');

var FundSchema = require('../schemas/fund');

var Fund = mongoose.model('Fund', FundSchema);

module.exports = Fund;
