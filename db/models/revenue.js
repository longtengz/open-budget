var mongoose = require('mongoose');

var RevenueSchema = require('../schemas/revenue');

var Revenue = mongoose.model('Revenue', RevenueSchema);

module.exports = Revenue;
