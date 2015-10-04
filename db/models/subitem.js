var mongoose = require('mongoose');

var SubitemSchema = require('../schemas/subitem');

var Subitem = mongoose.model('Subitem', SubitemSchema);

module.exports = Subitem;
